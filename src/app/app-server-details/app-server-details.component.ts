import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { DbDetailsService } from '../shared/db-details.service';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface StdElement {
  password: string;
  port: number;
  ip: number;
  serverName: string;
  sip: number;
  userName: string;
  desc:string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '10.30.9.1', weight: 9002, symbol: 'IIS-WebMethods'},
  {position: 2, name: '10.30.9.2', weight: 8280, symbol: 'IIS-WebMethods'},
  {position: 3, name: '10.30.9.3', weight: 9141, symbol: 'IIS-WebMethods'},
  {position: 4, name: '10.30.9.4', weight: 9452, symbol: 'IIS-WebMethods'},
  {position: 5, name: '10.30.9.5', weight: 5462, symbol: 'IIS-WebMethods'},
  {position: 6, name: '10.30.9.6', weight: 6556, symbol: 'IIS-WebMethods'},
  {position: 7, name: '10.30.9.7', weight: 8080, symbol: 'IIS-WebMethods'},
  {position: 8, name: '10.30.9.8', weight: 8141, symbol: 'IIS-WebMethodsO'},
  {position: 9, name: '10.30.9.9', weight: 443, symbol: 'IIS-WebMethodsF'},
  {position: 10, name: '10.30.9.10', weight: 5454, symbol: 'IIS-WebMethods'},
];
let ELEMENT_DATA1: StdElement[] = [];
@Component({
  selector: 'app-app-server-details',
  templateUrl: './app-server-details.component.html',
  styleUrls: ['./app-server-details.component.css']
})

export class AppServerDetailsComponent implements OnInit {
  hostname: "";
  jsonToSend: any;
  ip: "";
  port: "";
  desc: "";
  username: "";
  pwd: "";
  serverdetails: string;
  serverNameToDisplay : "IIS-WebMethod";
  dialog: any;
  dialogResult: any;
  

  constructor(private localStorage: LocalStorage,private router:Router,private dbservice:DbDetailsService) { }

  ngOnInit() {

    this.getServerDetails();
    const ELEMENT_DATA1: StdElement[] = [];
  }
  getServerDetails(){
    this.dbservice.getServerDetails().subscribe(data=>{
       //alert(JSON.stringify(data['servers']['server']));
       this.serverdetails = JSON.stringify(data['servers']['server']);
      // alert(this.serverdetails)
       ELEMENT_DATA1= JSON.parse(this.serverdetails);
       this.dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
      //this.messageService.add({key: 'custom', severity:'info', summary: 'Success Message', detail: 'Saved Successfully' });
      //this.router.navigate(['Dashboard/db-list']);
     },err=>{
       
     })
  }

  displayedColumns: string[] = ['position', 'name','symbol', 'weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumnNames: string[] = ['password', 'port','ip', 'serverName','sip','userName','desc'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getRecord(x){
    localStorage.setItem("ip",JSON.stringify(x));
    this.router.navigate(['Dashboard/second']);
  }
  addDetailsToServer(){
    //alert(this.hostname);
    this.jsonToSend = {
      "serverName":this.hostname,
      "ip":this.ip,
      "port":this.port,
      "desc":this.desc,
      "userName":this.username,
      "password":this.pwd
    };
   // alert(JSON.stringify(this.jsonToSend));
    console.log(JSON.stringify(this.jsonToSend));
    this.dbservice.addServerDetails(this.jsonToSend).subscribe(data=>{
      alert("Sucess")
    
    },err=>{
      
    })
  }

  getquin(){
    this.jsonToSend = {
      "serverName":this.hostname,
      "ip":this.ip,
      "port":this.port,
      "desc":this.desc,
      "userName":this.username,
      "password":this.pwd
    };
    this.dbservice.getQuinnox(this.jsonToSend).subscribe(data=>{
      alert("test connection successful")
    })
  }
  
  

}
