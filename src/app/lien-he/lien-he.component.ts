import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.less']
})
export class LienHeComponent implements OnInit {

  order: Order = new Order();
  selectedFileName: String = "Không file nào được chọn";

  constructor(public orderService: OrderService) { 
  }

  ngOnInit() {
    /*
    this.order.name = "Bosch";
    this.order.email = "test5678@gmail.com";
    this.order.tel = "0912345678";
    this.order.address = "Ho Chi Minh";
    this.order.description = "testing";*/
  }

  createOrder() {
    this.orderService.requestOrder(this.order);
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
		this.order.attachedFile = 
		{ 
			fileName: file.name, 
		    content:reader.result.split(',')[1] 
		};

        this.selectedFileName = file.name;
      };
    }
  }

}
