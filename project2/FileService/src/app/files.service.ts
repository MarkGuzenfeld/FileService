import { Injectable } from '@angular/core';
import { TableComponent } from './table/table.component';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DataTableComponent, DataTableItem } from './data-table/data-table.component';



export interface FileData {
name: string
path: string
creationDate: Date
id: number
size: number
extension: string
isFolder: boolean

}

@Injectable({
  providedIn: 'root'
})

export class FilesService {

  constructor(private http: HttpClient){//private http: HttpClient
   
  }


  qsubject = new Subject<any>();

  folderSubject = new Subject<FileData[]>();
  fileSubject = new Subject<FileData[]>()

  subscribeAtFolder(): Observable<FileData[]>{
   return this.fileSubject.asObservable();
  }

  
  public convert(data: any): FileData{
    return {
      name: data.name,
      path: data.path,
      creationDate: new Date(data.creationDate),
      id: data.id,
      size: data.size,
      extension: data.extension,
      isFolder: data.isFolder,
    }
  }


fileList(){
  this.http.get<any[]>("http://localhost:8081/").subscribe(data => {
    this.fileSubject.next(data.map(data => this.convert(data)))
  })
}
openFile(path: string): Observable<FileData[]> {
  return this.http.get<FileData[]>(`http://localhost:8081?path=${path}`);
}


}
// openFile(path: string): Observable<FileData[]>{
//   return this.http.get<FileData[]>(`http://localhost:8081?path=${path}`);
// }
// public openFolder(row: FileData){
//   let date = new Date();
//   const path = row.path;
//   return [
//     {name: 'file_12345',path:path + '/file_12345',creationDate: date,id: 1,size: 999,extension: 'txt',isFolder: false},
//     {name: 'file_12345',path:path + '/file_12345',creationDate: date,id: 1,size: 999,extension: 'txt',isFolder: false},
//   ];
//   // this.fileSubject.next(files)
// }
  

  // }
  



