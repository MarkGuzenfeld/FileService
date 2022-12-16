import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  time: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', time: new Date },

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'time'];
  dataSource = ELEMENT_DATA;
}




// selector: 'app-table2',
//   templateUrl: './table2.component.html',
//   styleUrls: ['./table2.component.css']