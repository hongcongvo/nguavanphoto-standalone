import { Injectable } from '@angular/core';
import { Category } from './category';
import { SanPham } from "./san-pham";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SanPhamService {

  url="http://localhost:3000/api/product";

  constructor(private httpClient: HttpClient) { }

  getSanPhamByCategory(category: Category): Observable<SanPham[]> {
    return this.httpClient.get<SanPham[]>(this.url + "?category=" + category._id);
  }

}
