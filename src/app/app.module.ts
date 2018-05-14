import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HinhAnhComponent } from './hinh-anh/hinh-anh.component';
import { GiaComponent } from './gia/gia.component';
import { AppRoutingModule } from './/app-routing.module';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './lien-he/lien-he.component';

import { SanPhamService } from "./san-pham.service";
//import { SlideshowComponent } from './slideshow/slideshow.component';

import { FormsModule } from '@angular/forms';
import { ProductListComponent, ProductDetailDialogComponent} from './product-list/product-list.component';
import { SwipeService } from './slideshow/swipe.service';
import { CategoryService } from './category.service';


@NgModule({
  declarations: [
    AppComponent,
    HinhAnhComponent,
    GiaComponent,
    GioiThieuComponent,
    LienHeComponent,
    ProductListComponent,
    ProductDetailDialogComponent,
    //SlideshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    SlideshowModule,
    HttpClientModule
    
  ],
  entryComponents: [ ProductDetailDialogComponent],

  providers: [SanPhamService, CategoryService /*SwipeService, TransferState*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
