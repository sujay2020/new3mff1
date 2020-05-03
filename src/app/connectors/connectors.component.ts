import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DbDetailsService } from '../shared/db-details.service';
@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css']
})
export class ConnectorsComponent  {

  constructor(public dialog: MatDialog,private dbservice:DbDetailsService) { }
  

  // ngOnInit() {
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  open(){
    this.dbservice.insert().subscribe(data=>{ 
      alert(JSON.stringify(data));
    });
  }

}
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-connectors',
//   templateUrl: './connectors.component.html',
//   styleUrls: ['./connectors.component.css']
// })
// export class ConnectorsComponent {
//   display: boolean = false;
//     showDialog() {
//         this.display = true;
//     }
// }
