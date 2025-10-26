import { Component } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartitem';
import { FoodService } from '../services/food/food.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css'],
  imports: [NotFoundComponent,RouterLink,NgIf,NgFor,CurrencyPipe]
})
export class CartpageComponent {
cart!:Cart
constructor(private cartService: CartService ,) {

}
ngOnInit():void{
  this.setcart()
}
setcart(){
  this.cart = this.cartService.getcart()
}
removecart(cartitem: CartItem){
  this.cartService.removefromcart(cartitem.food)
  this.setcart()
}
changequantity(cartitem:CartItem,quantityinstring:string){
const quantity = parseInt(quantityinstring);
this.cartService.changequantity(cartitem.food.id,quantity);
this.setcart()
}
}
