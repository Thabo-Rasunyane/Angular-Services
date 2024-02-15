import { Component } from '@angular/core';
import { BuyPackage } from '../Services/buy.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {

  btnClick(){
    let buyPack = new BuyPackage();
    buyPack.buyBtnClicked();
    console.log('subscribe component method raised');

  }

}
