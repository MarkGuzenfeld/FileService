import { Component, Inject, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-window',
  templateUrl: './upload-window.component.html',
  styleUrls: ['./upload-window.component.css']
})
export class UploadWindowComponent {

  titlesArr!: string[]
  
  
  @ViewChild('input')
  fileInput!: any


  constructor(@Inject(MAT_DIALOG_DATA)public path:string){
}


ngOnInit(): void {
}



titles(){
  this.titlesArr = []

  const files = this.fileInput.nativeElement.files
  if (files){
    for(let i = 0; i < files.length; i++){
      const file = files[i];
      const name = file.name;
      this.titlesArr.push(name)
      
    }
  }
}
}




