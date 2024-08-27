import { CartItem } from "./cartItem";

export class Cart{
    items:CartItem[]=[];

   get totalPrice(): number{
    let totalPrice=0;
    this.items.forEach(item => {
        totalPrice +=item.price;
    });
    return totalPrice;
   }

    // Calculate the total quantity of items in the cart
  get totalQuantity(): number {
    let totalQuantity = 0;
    this.items.forEach(item => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }
}