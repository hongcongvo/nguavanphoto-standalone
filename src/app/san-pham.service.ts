import { Injectable } from '@angular/core';
import { Category } from './category';
import { SanPham } from "./san-pham";

@Injectable()
export class SanPhamService {

  constructor() { }

  getSanPhamByCategory(category: Category) {
    if(category.name == "Mỹ phẩm") {
      return [
      {name: 'sp2', pathToImage:'../../assets/images/fragrance-25-343x343.jpg'},
      {name: 'sp2', pathToImage:'../../assets/images/fragrance-25-343x343.jpg'},
      {name: 'sp2', pathToImage:'../../assets/images/fragrance-25-343x343.jpg'},
      {name: 'sp2', pathToImage:'../../assets/images/fragrance-25-343x343.jpg'},
      {name: 'sp2', pathToImage:'../../assets/images/fragrance-25-343x343.jpg'},
      {name: 'sp2', pathToImage:'../../assets/images/fragrance-25-343x343.jpg'},
      {name: 'sp2', pathToImage:'../../assets/images/fragrance-25-343x343.jpg'},
      {name: 'sp2', pathToImage:'../../assets/images/fragrance-25-343x343.jpg'}
    ]
    }
     else {
      return [
        {name: 'sp2', pathToImage:'../../assets/images/electronics-23-343x343.jpg'},
        {name: 'sp2', pathToImage:'../../assets/images/electronics-23-343x343.jpg'},
        {name: 'sp2', pathToImage:'../../assets/images/electronics-23-343x343.jpg'},
        {name: 'sp2', pathToImage:'../../assets/images/electronics-23-343x343.jpg'},
        {name: 'sp2', pathToImage:'../../assets/images/electronics-23-343x343.jpg'},
        {name: 'sp2', pathToImage:'../../assets/images/electronics-23-343x343.jpg'},
        {name: 'sp2', pathToImage:'../../assets/images/electronics-23-343x343.jpg'},
        {name: 'sp2', pathToImage:'../../assets/images/electronics-23-343x343.jpg'}
      ]
     }
  }

}
