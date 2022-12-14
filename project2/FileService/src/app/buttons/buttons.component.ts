import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
deleteOne = new EventEmitter<any>();
delete($event: MouseEvent){
  console.log('Working delete');
}
AddOne = new EventEmitter<any>();
add($event: MouseEvent){
  console.log('Working add');
}
MoveOne = new EventEmitter<any>();
move($event: MouseEvent){
  console.log('Working move');
}
}
