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
  stream$: Subject<string> = new Subject<string>();
  constructor (){
    this.stream$.subscribe(val =>{
      console.log(12);
      return ;
      
    })
  }
  next(){
    this.stream$.next('')
  }
//     constructor (private DataTableComponent: DataTableComponent){
//   this.DataTableComponent.homeGoBAck().subscribe(()=>{
//     return this.retutnToHome.asObservable();
//   })
//   this.DataTableComponent.retutnToHome.next('');
  
// }
// next() {
//   this.DataTableComponent.retutnToHome.next('');
// }

}


