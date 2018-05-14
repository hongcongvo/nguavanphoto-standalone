import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { SanPham } from "../san-pham";
import { SanPhamService } from "../san-pham.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  @Input() sanPhams: SanPham[];
  imageUrls: string[];

  constructor(public dialog: MatDialog) {

   }

  ngOnInit() {
  }

  openDialog(selectecdProductIndex: number){
    this.imageUrls = [];
    for (const sanPham of this.sanPhams) {
      this.imageUrls.push(sanPham.pathToImage);
    }
    let  matDialogRef= this.dialog.open(ProductDetailDialogComponent, {
      width: '60%', disableClose: true,
      data: {imageUrls: this.imageUrls, selectedIndex: selectecdProductIndex}
    });

  }

  
}



@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.less']
})
export class ProductDetailDialogComponent implements OnInit {
@ViewChild('slideshow') slideshow: any;
  slideIndex: number;

  constructor(    
    public dialogRef: MatDialogRef<ProductDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.slideIndex = data.selectedIndex;
    }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.slideshow.slideIndex = this.slideIndex;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
