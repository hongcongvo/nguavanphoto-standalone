import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HinhAnhComponent } from './hinh-anh/hinh-anh.component';
import { GiaComponent } from './gia/gia.component';
import { AppRoutingModule } from './/app-routing.module';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './lien-he/lien-he.component';

import { DanhSachSanPhamComponent } from './danh-sach-san-pham/danh-sach-san-pham.component';
import { SanPhamService } from "./san-pham.service";

@NgModule({
  declarations: [
    AppComponent,
    HinhAnhComponent,
    GiaComponent,
    GioiThieuComponent,
    LienHeComponent,
    DanhSachSanPhamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [SanPhamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
