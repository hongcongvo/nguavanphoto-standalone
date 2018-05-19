import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';

@Injectable()
export class OrderService {
  url = 'http://localhost:3000/order/';

  constructor(private httpClient: HttpClient) { }

  requestOrder(order: Order) {
    
    this.httpClient.post(this.url, order )
      .subscribe(res => {
          console.log(res + "An order was created!")
        }, (err) => {
          console.log(err);
        }
      );
  }

}
