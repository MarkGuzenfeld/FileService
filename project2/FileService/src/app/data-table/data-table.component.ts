import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
//import { DataTableDataSource, DataTableItem } from './data-table-datasource';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  id: number;
  extension: string,
  size: number,
  isFolder: boolean,
  time: Date,
  path: string
  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA:
DataTableItem[] = [
  
  { id: 1, name: 'Hydrogen', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:true, time: new  Date},
  { id: 2, name: 'Helium', extension: 'txt',size:6565, path:'/home/me/', isFolder:false, time: new  Date },
  { id: 3, name: 'Lithium' , extension: 'txt',size:6565,path:'/home/me/', isFolder:false, time: new  Date},
  { id: 4, name: 'Beryllium', extension: 'txt',size:6565, path:'/home/me/',isFolder:false , time: new  Date},
  { id: 5, name: 'Boron' , extension: 'txt',size:6565,path:'/home/me/', isFolder:false, time: new  Date},
  { id: 6, name: 'Carbon' , extension: 'txt',size:6565, path:'/home/me/',isFolder:false, time: new  Date},
  { id: 7, name: 'Nitrogen' , extension: 'txt',size:6565,path:'/home/me/', isFolder:false, time: new  Date},
  { id: 8, name: 'Oxygen' , extension: 'txt',size:6565, path:'/home/me/',isFolder:false, time: new  Date},
  { id: 9, name: 'Fluorine' , extension: 'txt',size:6565,path:'/home/me/', isFolder:false, time: new  Date},
  { id: 10, name: 'Neon', extension: 'txt',size:6565,path:'/home/me/', isFolder:false , time: new  Date},
];
const EXAMPL_DATA:
DataTableItem[] = [
  
  { id: 1, name: 'Hydrogen', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:true, time: new  Date},
  { id: 2, name: 'Helium', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:false, time: new  Date },
  { id: 3, name: 'Lithium' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements AfterViewInit {
 
  constructor(private http: HttpClient ) { }
  getData(){
    return this.http.get('http://127.0.0.1:8081/file')
  }
 // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource = new MatTableDataSource(EXAMPLE_DATA);
  dataSource2 = this.http.get('http://127.0.0.1:8081/file');

  openFile( row: DataTableItem){
    console.log(row.isFolder)
   if (row.isFolder){
    // return this.
     return this.dataSource.data = EXAMPL_DATA;
    //  ************************************************************
    //  return this.httpClient.get<any[]>("http://127.0.0.1:8081/file").subscribe(data => {
    //   for (const datum of data){
    //     console.log(datum);
        
    //   }
    // })
    // *************************************************************
   } else{
    return []
   }
  }
 
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'choose', 'icon', 'path','id', 'name', 'extension','size','time'];
  
 

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
