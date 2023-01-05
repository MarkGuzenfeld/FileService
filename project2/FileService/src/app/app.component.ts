import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FilesService } from './files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FTP Server';
  dataSource = new MatTableDataSource();
  columns: string[] = ['name', 'path', 'creationDate', 'id', 'size'];

  constructor(private filesService: FilesService) {
    this.filesService.fileList();
  }

 

}

