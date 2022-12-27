import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DataTableComponent, DataTableItem } from './data-table/data-table.component';



export interface File {
 
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private baseUrl = 'http://localhost:8080/file'
  openSpring(){
  }
  subject = new Subject<string>();
  dataSource: any;
  constructor(){//private http: HttpClient
    this.subject.subscribe(() => {
      console.log('asd');
      return 
      // this.http.get<any[]>("http://127.0.0.1:8081/file").subscribe(data => {
      // for (const datum of data){
      //   console.log(datum);

      
      // HTTP-запрос GET через объект HttpClient для получения данных с сервера. Метод get() принимает в качестве параметра URL-адрес сервера, на который отправляется запрос, а также тип ожидаемого ответа. В данном случае это тип any[], то есть массив объектов. В блоке subscribe() определена функция обратного вызова, которая выполняется при получении ответа с сервера
    });
  }

  }
  



