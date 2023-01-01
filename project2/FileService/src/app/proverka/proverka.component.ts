import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proverka',
  templateUrl: './proverka.component.html',
  styleUrls: ['./proverka.component.css']
})
export class ProverkaComponent {

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    console.log('Proverka');

    this.http.get<any>('http://127.0.0.1:8081/user').subscribe(
      {
        next:((response: any) => {
       
          
          // return this.httpClient.get<any[]>("http://127.0.0.1:8081/file").subscribe(data => {
          //   for (const datum of data){
          //     console.log(datum);
          
        }),
        error: (error => {
          console.log(error);
          
        })
      }
    )
    
  }

}
