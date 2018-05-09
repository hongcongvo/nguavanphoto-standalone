import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SlideshowModule} from 'ng-simple-slideshow';


import { AppComponent } from './app.component';
import { HinhAnhComponent } from './hinh-anh/hinh-anh.component';
import { GiaComponent } from './gia/gia.component';
import { AppRoutingModule } from './/app-routing.module';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './lien-he/lien-he.component';

import { DanhSachSanPhamComponent,DialogOverviewExampleDialog } from './danh-sach-san-pham/danh-sach-san-pham.component';
import { SanPhamService } from "./san-pham.service";

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HinhAnhComponent,
    GiaComponent,
    GioiThieuComponent,
    LienHeComponent,
    DanhSachSanPhamComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    SlideshowModule
    
  ],
  entryComponents: [DialogOverviewExampleDialog],

  providers: [SanPhamService,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
