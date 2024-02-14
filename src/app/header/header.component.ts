import { Component } from '@angular/core';
import { BuyPackage } from '../Services/buy.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  btnClick(){
    let buyPack = new BuyPackage();
    buyPack.buyBtnClicked();
  }

}
