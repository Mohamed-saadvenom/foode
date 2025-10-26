import { CartItem } from './cartitem';
export class Cart {
  items: CartItem[] = [];

  get totalprice(): number {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }
}
