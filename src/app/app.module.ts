import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HinhAnhComponent } from './hinh-anh/hinh-anh.component';
import { GiaComponent } from './gia/gia.component';
import { AppRoutingModule } from './/app-routing.module';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './lien-he/lien-he.component';


@NgModule({
  declarations: [
    AppComponent,
    HinhAnhComponent,
    GiaComponent,
    GioiThieuComponent,
    LienHeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
