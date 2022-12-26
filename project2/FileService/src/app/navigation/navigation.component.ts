import { Component, OnInit } from '@angular/core';
import { FilesService } from '../files.service';
import { Data } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { DataTableComponent } from '../data-table/data-table.component';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  data: any;
  subscription: Subscription | undefined;
  constructor(private FileService: FilesService) {}
  ngOnInit(): void {
    this.subscription = this.FileService.getData().subscribe(log => {
      console.log('123');
  })

  };

}









function sendData() {
  throw new Error('Function not implemented.');
}
//     constructor (private DataTableComponent: DataTableComponent){
//   this.DataTableComponent.homeGoBAck().subscribe(()=>{
//     return this.retutnToHome.asObservable();
//   })
//   this.DataTableComponent.retutnToHome.next('');
  
// }
// next() {
//   this.next();
// }



