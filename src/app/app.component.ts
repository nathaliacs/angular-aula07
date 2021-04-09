import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'HttpCliente Demo';

  constructor(
    public gitHubService: GithubService,
    public bitcoinService: BitcoinService,  
  ){ }


  ngOnInit(){
    this.gitHubService.update();  
  }
  
  updateBitCoinRates(){
    this.bitcoinService.update();
  }
}
