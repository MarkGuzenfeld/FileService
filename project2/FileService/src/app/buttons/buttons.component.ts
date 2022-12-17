import { Component, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadWindowComponent } from '../upload-window/upload-window.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
constructor( private dialog: MatDialog) {}
openDialog(){
this.dialog.open(UploadWindowComponent, {
  height: '300px',
  width: '500px'
})

  
}
}
