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
    public dataSubscription: Subscription | undefined;

    // getData(){  
    //   this.FilesService.subject.next("")
    // }
    navElements!: String;
  constructor(private FilesService: FilesService){
    // this.navElements = ["/", 'home', "folder"]
  }
  ngOnInit(): void {
    this.dataSubscription = this.FilesService.qsubject.asObservable().subscribe(data => {
      console.log(data);
      
    });
  }
  }
    



