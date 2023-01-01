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
  
FileList(): FileData[]{
  this.http.get<any[]>("http://localhost:8081/user").subscribe(data => {
    for (const datun of data){
      console.log(datun);
    }
  })
  let date = new Date()
  return [
    {name: 'file', path: '/home/papka', creationDate: date, id: 1, size: 999, extension: 'txt', isFolder: true},
    {name: 'file', path: '/home/papka', creationDate: date, id: 1, size: 999, extension: 'txt', isFolder: false},
    {name: 'file', path: '/home/papka', creationDate: date, id: 1, size: 999, extension: 'txt', isFolder: false},
    {name: 'file', path: '/home/papka', creationDate: date, id: 1, size: 999, extension: 'txt', isFolder: false},
    {name: 'file', path: '/home/papka', creationDate: date, id: 1, size: 999, extension: 'txt', isFolder: false},

  ]
}
openFile(row: FileData):FileData[]{
  if (row.isFolder) {
    console.log('true');
    return this.openFolder(row)
  }
  else{
    console.log('false');
    return[];
  }
}
public openFolder(row: FileData): FileData[]{
  let date = new Date();
  const path = row.path;
  return [
    {name: 'file_12345',path:path + '/file_12345',creationDate: date,id: 1,size: 999,extension: 'txt',isFolder: false},
    {name: 'file_12345',path:path + '/file_12345',creationDate: date,id: 1,size: 999,extension: 'txt',isFolder: false},
  ]
}
 
  openSpring(){
  }
  subject = new Subject<string>();
  dataSource: any;
  constructor(private http: HttpClient){//private http: HttpClient
    this.subject.subscribe(() => {
      console.log('asdфыва');
      return 
      // this.http.get<any[]>("http://127.0.0.1:8081/file").subscribe(data => {
      // for (const datum of data){
      //   console.log(datum);

    
      // HTTP-запрос GET через объект HttpClient для получения данных с сервера. Метод get() принимает в качестве параметра URL-адрес сервера, на который отправляется запрос, а также тип ожидаемого ответа. В данном случае это тип any[], то есть массив объектов. В блоке subscribe() определена функция обратного вызова, которая выполняется при получении ответа с сервера
    });
  }

  }
  



