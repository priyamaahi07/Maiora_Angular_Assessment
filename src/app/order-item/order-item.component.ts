import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-order-item',
  imports: [ImageModule, CommonModule],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss'
})
export class OrderItemComponent {

  itemName: string = 'Cheese Burger Whopper';
  amount: number = 17.98;
  qty: number = 1;

  items: any = [
    { img: '../../asset/cheeseburger.png', isSelected: 1 },
    { img: '../../asset/cheeseburger.png', isSelected: 0 },
    { img: '../../asset/cheeseburger.png', isSelected: 0 },
    { img: '../../asset/cheeseburger.png', isSelected: 0 },
  ];
  constructor() {

  }

  addItem() {

    this.qty = this.qty + 1;
    // if (this.qty == 1) {
      this.amount = 17.98;
    // }
    this.amount = this.amount * this.qty;
  }
  removeItem() {
    this.qty = this.qty - 1;
    this.amount = 17.98;
    this.amount = this.amount * (this.qty);

    // console.log('Amount: ', this.amount);

    // console.log('Quantity: ', this.qty);
  }

  addToCart() {
    console.log('ITEM NAME: ', this.itemName);
    console.log('Quantity: ', this.qty);
    console.log('Amount: ', this.amount);
  }

  order() {
    this.addToCart();
  }

  selectItem(item: any) {
    this.items.forEach((element: any) => {
      if (item.img === element.img) {
        item.isSelected = 1;
      } else {
        item.isSelected = 0;
      }
    });

    this.items = this.items;
  }
}
