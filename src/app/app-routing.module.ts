import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HinhAnhComponent } from './hinh-anh/hinh-anh.component';
import { GiaComponent } from "./gia/gia.component";
import { GioiThieuComponent } from "./gioi-thieu/gioi-thieu.component";
import { LienHeComponent } from "./lien-he/lien-he.component";

const routes: Routes = [
  { path: '',redirectTo: 'hinh-anh', pathMatch: 'full'},
  { path: 'hinh-anh', component: HinhAnhComponent },
  { path: 'gia', component: GiaComponent },
  { path: 'gioi-thieu', component: GioiThieuComponent },
  { path: 'lien-he', component: LienHeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
