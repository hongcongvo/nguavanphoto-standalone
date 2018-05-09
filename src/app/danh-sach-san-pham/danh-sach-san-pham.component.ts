import { Component, OnInit, Input, Inject,ViewChild,ElementRef } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from "@angular/material";


import { SanPham } from "../san-pham";
import { SlideshowModule } from 'ng-simple-slideshow';

@Component({
  selector: 'app-danh-sach-san-pham',
  templateUrl: './danh-sach-san-pham.component.html',
  styleUrls: ['./danh-sach-san-pham.component.less']
})

export class DanhSachSanPhamComponent implements OnInit {
@Input() sanPhams : SanPham[];
imageUrlArray: string[]= [];

ngOnInit() {
    
}

ngAfterViewInit() {
}

constructor(public dialog: MatDialog) {}

openDialog(selectedIndex: number): void {
  this.imageUrlArray = [];
  for ( const sanPham of this.sanPhams) {
    this.imageUrlArray.push(sanPham.pathToImage);
  }
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '60%',disableClose:false, 
    data: { selectedIndex: selectedIndex, imageUrlArray: this.imageUrlArray }
  });
  
  dialogRef.afterClosed();
}


}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-san-pham-detail.component.html',
})
export class DialogOverviewExampleDialog {
  @ViewChild('slideshow') slideshow: any;

  selectedIndex: number;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.selectedIndex = data.selectedIndex;
    }

    ngOnInit() {
      
    }

    ngAfterContentInit() {
      this.slideshow.slideIndex = this.selectedIndex;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}