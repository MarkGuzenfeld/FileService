import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';



// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  id: number;
  extension: string,
  size: number,
  isFolder: boolean,
  time: Date,
  path: string
  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA:
DataTableItem[] = [
  
  { id: 1, name: 'Hydrogen', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:true, time: new  Date},
  { id: 2, name: 'Helium', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:false, time: new  Date },
  { id: 3, name: 'Lithium' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
  { id: 4, name: 'Beryllium', extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false , time: new  Date},
  { id: 5, name: 'Boron' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
  { id: 6, name: 'Carbon' , extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false, time: new  Date},
  { id: 7, name: 'Nitrogen' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
  { id: 8, name: 'Oxygen' , extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false, time: new  Date},
  { id: 9, name: 'Fluorine' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
  { id: 10, name: 'Neon', extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false , time: new  Date},
];
const EXAMPL_DATA:
DataTableItem[] = [
  
  { id: 1, name: 'Hydrogen', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:true, time: new  Date},
  { id: 2, name: 'Helium', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:false, time: new  Date },
  { id: 3, name: 'Lithium' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
  { id: 4, name: 'Beryllium', extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false , time: new  Date},
  { id: 5, name: 'Boron' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
  { id: 6, name: 'Carbon' , extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false, time: new  Date},
  { id: 7, name: 'Nitrogen' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
  { id: 8, name: 'Oxygen' , extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false, time: new  Date},
  { id: 9, name: 'Fluorine' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
  { id: 10, name: 'Neon', extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false , time: new  Date},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  dataS: DataTableItem[] = EXAMPL_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  openFile( row: DataTableItem){
    console.log(1)
    console.log(row.isFolder)

   if (row.isFolder){
     return this.data = this.dataS
   } else{
    return []
   }
  }
 
  constructor() {
    super();
    
  }
  
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns  A stream of the items to be rendered.
  */
 
 connect(): Observable<DataTableItem[]> {
   if (this.paginator && this.sort) {
     // Combine everything that affects the rendered data into one update
     // stream for the data-table to consume.
     return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
     .pipe(map(() => {
       return this.getPagedData(this.getSortedData([...this.data ]));
      }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }
  
  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
  */
 disconnect(): void {}
 
 /**
  * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
 */

  public openFolder(row: DataTableItem): DataTableItem[]{
    new Date()
    const path =row.path
    return [
      { id: 1, name: 'Hydrogen', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:true, time: new  Date},
      { id: 2, name: 'Helium', extension: 'txt',size:6565, path:'/home/me/papka', isFolder:false, time: new  Date },
      { id: 3, name: 'Lithium' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
      { id: 4, name: 'Beryllium', extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false , time: new  Date},
      { id: 5, name: 'Boron' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
      { id: 6, name: 'Carbon' , extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false, time: new  Date},
      { id: 7, name: 'Nitrogen' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
      { id: 8, name: 'Oxygen' , extension: 'txt',size:6565, path:'/home/me/papka',isFolder:false, time: new  Date},
      { id: 9, name: 'Fluorine' , extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false, time: new  Date},
      { id: 10, name: 'Neon', extension: 'txt',size:6565,path:'/home/me/papka', isFolder:false , time: new  Date},
    ];
  }
  private getPagedData(data: DataTableItem[]): DataTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }
  
  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]): DataTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data; 
    }
    
    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}


/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
