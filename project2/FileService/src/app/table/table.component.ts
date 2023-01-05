import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FilesService, FileData } from '../files.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})

export class TableComponent {
  dataSource = new MatTableDataSource<any>();

  columns: string[] = ['choose', 'icon', 'name', 'path', 'creationDate', 'id', 'size', 'extension'];


  constructor(public filesService: FilesService) { }
  
  
  ngOnInit() {
    this.filesService.subscribeAtFolder().subscribe(data => {
      this.dataSource.data = data;
      this.filesService.folderSubject.subscribe(path => {
        console.log(`Папка ${path} открыта`);
      });
      
    });
  }
 
  
  openFile(row: FileData) {
    if (row.isFolder) {
      console.log('true');
      
      this.filesService.folderSubject.subscribe(path => {
        console.log(`Папка ${path} открыта`);
      });
    } else {
      console.log('false');
      
      // Обрабатываем нажатие на файл
    }
  }
 
  
  
  
  
  

  refreshTable() {
    this.filesService.fileList();
  }
}
