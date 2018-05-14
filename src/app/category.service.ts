import { Injectable } from '@angular/core';
import { CATEGORIES } from './mock-categories';
import { Category } from './category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CategoryService {
  url = 'http://localhost:3000/category';
 categories: Category[] = [];

  constructor(private httpClient: HttpClient) {
    
   }
 
  getCategories(): Observable<Category[]> {

  return this.httpClient.get<Category[]>(this.url);

}
}
