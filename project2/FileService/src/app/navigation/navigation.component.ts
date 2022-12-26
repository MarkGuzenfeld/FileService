import { Component, OnInit } from '@angular/core';
import { DataTableItem } from '../data-table/data-table.component';
import { FilesService } from '../files.service';
import { Data } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { DataTableComponent } from '../data-table/data-table.component';
import { DataTableDataSource } from '../data-table/data-table-datasource';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
  export class NavigationComponent {
    getData(){  
      this.FilesService.subject.next(1)
    }
  constructor(private FilesService: FilesService){

  }

  
    
    

    // ************************************************
    // constructor(private FilesService: FilesService) {}

    // ngOnInit() {
    //   this.FilesService.data$.subscribe(data => {
    //     console.log('jsdf');
    //   });
    // }
  
    // setHomeData() {
    //   this.FilesService.setData();// ВОТ ОН ВОПРОС
    // }
  }
    // ******************************************************
  
  
  // data: any;
  // subscription: Subscription | undefined;
  // constructor(private FileService: FilesService) {}
  // ngOnInit(): void {
  //   this.subscription = this.FileService.getData().subscribe(log => {
  //     console.log('123', log);
  // })
  // goHome(){
  //   this.FileService.getData().subscribe();
  // }
  ;

//     constructor (private DataTableComponent: DataTableComponent){
//   this.DataTableComponent.homeGoBAck().subscribe(()=>{
//     return this.retutnToHome.asObservable();
//   })
//   this.DataTableComponent.retutnToHome.next('');
  
// }
// next() {
//   this.next();
// }



