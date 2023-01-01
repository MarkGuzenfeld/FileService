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
          // console.log(response);
          console.log(response.name);
          console.log(response.path);
          console.log(response.creationDate);
          console.log(response.isFolder);
          
        }),
        error: (error => {
          console.log(error);
          
        })
      }
    )
    
  }

}
