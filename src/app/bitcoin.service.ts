import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {updated: string};
  bpi: {
    USD: {
      "symbol": string;
      "rate": string;
      "rate_float": number;
    };
    EUR: {
       "symbol": string;
      "rate": string;
      "rate_float": number;
    }
  }
}

@Injectable()
export class BitcoinService {

  currentResponse: Response;

  updateList:Array<Response> = [];

  constructor( private http: HttpClient) { }

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json')
    .subscribe(data => {
      this.currentResponse = data;
      this.updateList.push(data);
    });
  }
}