import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataTableComponent, DataTableItem } from './data-table/data-table.component';


export interface File {
 
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  subject = new Subject<number>();
  constructor(){
    this.subject.subscribe(() => {
      return 123
      
    });
  }
  }




