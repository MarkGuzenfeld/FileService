import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FilesService, FileData } from '../files.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})

export class TableComponent {
  dataSource = new MatTableDataSource<FileData>();
  columns: string[] = ['choose', 'icon', 'name', 'path', 'creationDate', 'id', 'size', 'extension'];
  datasourse!:any

  constructor(public filesService: FilesService) {
    this.dataSource.data = this.filesService.FileList();
    this.dataSource._updateChangeSubscription();
  }
  openFile(row: FileData) {
    this.dataSource.data = this.filesService.openFile(row);
    this.dataSource._updateChangeSubscription();
  }
  ngOnInit(): void {
    this.filesService.subscribeAtFolder().subscribe((files)=> this.datasourse = files)
  }
  tableOne(){
    console.log('up');
    this.datasourse = this.filesService.FileList()
  }
}
