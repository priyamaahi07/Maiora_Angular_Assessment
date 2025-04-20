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
  num = '3,6,1,8,2';
  arr: any = [];
  sum: number = 0;





  items: any = [
    { img: '../../asset/cheeseburger.png', isSelected: 1 },
    { img: '../../asset/cheeseburger.png', isSelected: 0 },
    { img: '../../asset/cheeseburger.png', isSelected: 0 },
    { img: '../../asset/cheeseburger.png', isSelected: 0 },
  ];
  constructor() {
    this.arr = this.num.split(',');
    this.arr.forEach((element: any) => {
      this.sum = this.sum + parseInt(element);
    });






    const arrayy: any = [
      {
        "Location": "MYS",
        "Code": "Petrol",
        "Month": "3",
        "Year": "2023",
        "Value": "27.442",
        "Unit": "KL"
      },
      {
        "Location": "MYS",
        "Code": "Petrol",
        "Month": "4",
        "Year": "2023",
        "Value": "31.569",
        "Unit": "KL"
      }
    ]
    // console.log('input', this.inputJson);

    // let months: any = ["Jan", "Feb", "Mar", "Apr", "May", ""];
    // let financialYearMonth: any = [{str:"Apr", val: 3},{str:"May", val:4}];
    // let financialYearMonth: any = ["March","Apr"];

    let inputJson: any = {
      "content": {
        "Fyear": "2024",
        "Srno": "1",
        "CatName": "Petrol",
        "Location": "MYS",
        "Uom": "KL",
        "Apr": "27.442",
        "May": "31.569",
        "June": "25.421",
        "July": "26.443",
        "Aug": "23.148",
        "Sep": "0.000",
        "Oct": "0.000",
        "Nov": "0.000",
        "Decm": "0.000",
        "Jan": "0.000",
        "Feb": "0.000",
        "March": "0.000",
        "Total": "53.000"
      }
    };

    let months: any = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Decm"];

    let monthsWithKeyValues: any = [];
    months.forEach((element: any, i: number) => {
      monthsWithKeyValues.push({
        strMonth: element,
        intMonth: i.toString(),
        Fyear: i == 2 ? inputJson.content.Fyear : inputJson.content.Fyear - 1
      });
    });

    let contentKeys: any = Object.keys(inputJson.content);

    let finalArray: any = [];

    monthsWithKeyValues.forEach((element: any) => {
      contentKeys.forEach((ele: any) => {
        if (ele === element.strMonth) {
          finalArray.push({
            Code: inputJson.content.CatName,
            Location: inputJson.content.Location,
            Month: element.intMonth.toString(),
            Unit: inputJson.content.Uom,
            Value: inputJson.content[element.strMonth],
            Year: element.Fyear.toString(),
          });
        }
      });
    });

    console.log('Final Array: ', finalArray);





    // console.log('contentKeys', contentKeys);
    // console.log('financialYearMonth', financialYearMonth);
    // financialYearMonth.forEach((element: any) => {
    //   contentKeys.forEach((element1: any) => {
    //     if (element.str === element1) {
    //       // console.log(element);

    //       finalArray.push({
    //         Code: this.inputJson.content.CatName,
    //         Location: this.inputJson.content.Location,
    //         Month: element.val.toString(),
    //         Unit: this.inputJson.content.Uom,
    //         Value: this.inputJson.content[element.str],
    //         Year: (this.inputJson.content.Fyear - 1).toString(),
    //       });
    //     }
    //   });
    // });


    // console.log('expectedOutput', arrayy);


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
