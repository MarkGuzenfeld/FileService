import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export interface File {
 
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  data = new Subject<any>();
  // Метод для получения данных (подписка на Subject)
  getData(): Observable<any> {
    return this.data.asObservable();
  }
}


