import { Component } from '@angular/core';
import { BuyPackage } from '../Services/buy.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  btnClick(){
    let buyPack = new BuyPackage();
    buyPack.buyBtnClicked();
    console.log('login component method raised');
 }
}
