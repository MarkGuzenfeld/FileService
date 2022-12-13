import { Component } from '@angular/core';
import { FilesService } from './files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FTP Server';

  constructor(private fileService: FilesService){

  }

  action() {
    this.fileService
  }

}
