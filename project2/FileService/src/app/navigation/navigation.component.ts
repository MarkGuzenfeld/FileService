import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { DataTableComponent } from '../data-table/data-table.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  //   constructor (private DataTableComponent: DataTableComponent){
//   this.DataTableComponent.homeGoBAck().subscribe(()=>{
//     return this.retutnToHome.asObservable();
//   })
//   this.DataTableComponent.retutnToHome.next('');
  
// }
// next() {
//   this.DataTableComponent.retutnToHome.next('');
// }

}


