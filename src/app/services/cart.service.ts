import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartitem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart  = new Cart();
addtocart(food:Foods){
let cartitem = this.cart.items.find(item =>item.food.id == food.id)
if(cartitem){
  this.changequantity(food.id, cartitem.quantity + 1);
  return;
}
this.cart.items.push(new CartItem(food));
}
removefromcart(food:Foods){
  this.cart.items = this.cart.items.filter(item=>item.food.id !=food.id)
}
changequantity(foodid:number,quantity:number){
  let cartitem  = this.cart.items.find(item=>item.food.id == foodid )
  if(!cartitem) return;
  cartitem.quantity = quantity;
  // if(cartitem.quantity <=0) this.removefromcart(cartitem.food);
}
getcart():Cart{
  return this.cart
}
constructor() { }
}
