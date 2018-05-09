import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-categories';
import { Category } from "../category";
import { SanPham } from '../san-pham';
import { SanPhamService } from "../san-pham.service";

@Component({
  selector: 'app-hinh-anh',
  templateUrl: './hinh-anh.component.html',
  styleUrls: ['./hinh-anh.component.less']
})
export class HinhAnhComponent implements OnInit {

  categories = CATEGORIES;
  showedSanPhams : SanPham[];
  activeCategory: number;

  constructor(public sanPhamService: SanPhamService) { }

  ngOnInit() {
    this.selectCategory(this.categories[0]);
  }

  getShowedSanPhams(category: Category) {
    this.showedSanPhams = this.sanPhamService.getSanPhamByCategory(category);
  }

  selectCategory(category:Category) {
    this.getShowedSanPhams(category);
    this.activeCategory = category.id;

  }

}
