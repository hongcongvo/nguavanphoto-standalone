import { Component, OnInit, Input } from '@angular/core';
import { SanPham } from "../san-pham";

@Component({
  selector: 'app-danh-sach-san-pham',
  templateUrl: './danh-sach-san-pham.component.html',
  styleUrls: ['./danh-sach-san-pham.component.less']
})

export class DanhSachSanPhamComponent implements OnInit {
@Input() sanPhams : SanPham[];

  constructor() { }

  ngOnInit() {
  }


}
