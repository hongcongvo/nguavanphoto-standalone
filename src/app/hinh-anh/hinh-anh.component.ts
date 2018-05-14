import { Component, OnInit } from '@angular/core';
import { Category } from "../category";
import { SanPham } from '../san-pham';
import { SanPhamService } from "../san-pham.service";
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-hinh-anh',
  templateUrl: './hinh-anh.component.html',
  styleUrls: ['./hinh-anh.component.less']
})
export class HinhAnhComponent implements OnInit {

  categories : Category[];
  showedSanPhams : SanPham[];
  activeCategory: string;

  constructor(public sanPhamService: SanPhamService, public categoryService: CategoryService) {

   }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      data => {
      this.categories = data;
      this.selectCategory(this.categories[0]);
      this.categories.forEach(element => {
        element.imageUrl = "http://localhost:3000/image/" + element.imageUrl;
      });
      },
      error => console.log(error.error),
      () => console.log('>>>>>get categories completed!'));
  }

  

  getShowedSanPhams(category: Category) {
    this.showedSanPhams = this.sanPhamService.getSanPhamByCategory(category);
  }

  selectCategory(category:Category) {
    this.getShowedSanPhams(category);
    this.activeCategory = category._id;

  }

}
