import { Component, OnInit,Input } from '@angular/core';
import { DbEntries } from '../model/dbEntries.model';
import { DbDetailsService } from '../shared/db-details.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { MatTableDataSource } from '@angular/material';

export interface SoapDBElement {
  
  driver: string;
  jdbcUrl: string;
  userName: string;
  password: string;
  queries: string;
}
let ELEMENT_DATA1: SoapDBElement[] = [];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '10.30.9.1', weight: 9002, symbol: 'IIS-WebMethods' },
  { position: 2, name: '10.30.9.2', weight: 8280, symbol: 'IIS-WebMethods' },
  { position: 3, name: '10.30.9.3', weight: 9141, symbol: 'IIS-WebMethods' },
  { position: 4, name: '10.30.9.4', weight: 9452, symbol: 'IIS-WebMethods' },
  { position: 5, name: '10.30.9.5', weight: 5462, symbol: 'IIS-WebMethods' },
  { position: 6, name: '10.30.9.6', weight: 6556, symbol: 'IIS-WebMethods' },
  { position: 7, name: '10.30.9.7', weight: 8080, symbol: 'IIS-WebMethods' },
  { position: 8, name: '10.30.9.8', weight: 8141, symbol: 'IIS-WebMethodsO' },
  { position: 9, name: '10.30.9.9', weight: 443, symbol: 'IIS-WebMethodsF' },
  { position: 10, name: '10.30.9.10', weight: 5454, symbol: 'IIS-WebMethods' },
];

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() showAddData:boolean;
  @Input() server: any;
  @Input() packageDetails: any;
  @Input() services: any;
  dbToggle: boolean = false;
  errorStatus: any;
  template2:any;
  dbdetails: any;
  AuthTypeSourceForm: FormGroup;
  addSourceSecurities: FormArray;
  database: DbEntries;
  reuiredJosn: any;
  table: { queries: { query: string; }[]; };
  results: Object[] = [];
  queryElement: any;
  resultsLocalStorage: string[] = [];
  lsdataToStoreTemp: string[] = [];
  lsArray: string[] = [];
  responseDataToDisplay: any;
  responseDataToDisplayFlagTrue: boolean;
  responseDataToDisplayFlagFalse: boolean
  droupDownSelectValue :string = "oracle";
  db_name : string = "oracleDb";
  host_name:string="10.1.11.63";
  port_number:string="1521";
  user_name:string="wmuser";
  password:string="Quinnox123$";
  input:any=JSON.stringify( {
    "firstName": "Yadhunandhan3",
    "lastName": "Chandrasekaran1",
    "address1": "1427 valley lake drive",
    "address2": "Schaumburg",
    "zip": "60195",
    "occupation": {
        "role": "Lead Consultant"
    }
})
  table_name:string="WMUSER.EMPLOYEES";
  condition:string="emp_firstname='Yadhunandhan0'";
  constructor(private dbservice: DbDetailsService, private formBuilder: FormBuilder, private localstorage: LocalStorage) {

    this.AuthTypeSourceForm = this.formBuilder.group({
      addSourceSecurities: this.formBuilder.array([this.TargetSecurityArray()])
    })

  }
  displayedColumns: string[] = ['position', 'name', 'symbol', 'weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  displayedColumnNames: string[] = ['password', 'port', 'ip', 'serverName', 'sip', 'userName', 'desc'];
  displayedColumns2: string[] = ['key', 'value'];
  dataSource2 = this.responseDataToDisplay;
  ngOnInit() {
    this.template2={
      "droupDownSelectValue":"oracle",
      "db_name":"oracleDb",
      "host_name":"10.1.11.63",
      "port_number":"1521",
      "user_name":"wmuser",
      "password":"Quinnox123$",
      "input":
      {
        "firstName": "Yadhunandhan3",
        "lastName": "Chandrasekaran1",
        "address1": "1427 valley lake drive",
        "address2": "Schaumburg",
        "zip": "60195",
        "occupation": {
            "role": "Lead Consultant"
        }
      },
      "table_name":"WMUSER.EMPLOYEES",
      "condition":"emp_firstname='Yadhunandhan0'"
    }
    alert(this.template2)
    this.lsArray.push(localStorage.getItem('dbdetails'));
    //alert(this.lsArray)
    // ELEMENT_DATA1= JSON.stringify(this.lsArray);
    this.dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
    this.responseDataToDisplayFlagTrue = false;
    this.responseDataToDisplayFlagFalse = false;
    //this.dbdetails.database_name = "Oracle";
    //this.form.controls.state.setValue(
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
  TargetSecurityArray(): FormGroup {
    return this.formBuilder.group({
      ColoumName: '',
      TableName: ''
    });

  }
  addDbDetails(dbdetail) {
    console.log(JSON.stringify(dbdetail))

    //alert(this.AuthTypeSourceForm.value.addSourceSecurities.length);
    this.results = [];
    for (let index = 0; index < this.AuthTypeSourceForm.value.addSourceSecurities.length; index++) {
      this.queryElement = this.AuthTypeSourceForm.value.addSourceSecurities[index];
      let queryToSave = { "query": "Select count(*) as Count from " + this.queryElement.TableName + " where " + this.queryElement.ColoumName };
      //alert(queryToSave);
      this.results.push(queryToSave);
    }
    if (dbdetail.inputValue.length == 0) {
      dbdetail.inputValue = null;
    }

    this.reuiredJosn = {
      "input": dbdetail.inputValue,
      "output": {
        "driver": "com." + dbdetail.type_of_database + ".jdbc.Driver",
        "jdbcUrl": "jdbc:" + dbdetail.type_of_database + "://" + dbdetail.host_name + ":" + dbdetail.port_no + "/" + dbdetail.database_name + "?characterEncoding=utf8",
        "userName": dbdetail.user_name,
        "password": dbdetail.password,

        "queries": this.results
      }
    }
    //alert(JSON.stringify(this.reuiredJosn));
    //   this.responseDataToDisplay = {
    //     "status": "failure", 
    //     "message": "Data found for the given set of combination of queries." 
    // } ;
    // alert(JSON.stringify(this.responseDataToDisplay));
    debugger
    this.dbservice.postToApiCall(this.reuiredJosn).subscribe(data => {
      //  alert(JSON.stringify(data));
      debugger
      this.responseDataToDisplay = data;
      if (data['status'] == 'success') {
        this.responseDataToDisplayFlagTrue = true;
        this.responseDataToDisplayFlagFalse = false;

      } else {
        this.responseDataToDisplayFlagFalse = true;
        this.responseDataToDisplayFlagTrue = false;
      }
      // let response = {};



    }, err => {
      // alert
    })

    this.resultsLocalStorage.push(this.reuiredJosn);
    debugger
    console.log("result" + JSON.stringify(this.resultsLocalStorage));
    if (localStorage.getItem('dbdetails') == null) {
      localStorage.setItem("dbdetails", JSON.stringify(this.reuiredJosn))
    } else {

      this.lsdataToStoreTemp.push(JSON.stringify(this.reuiredJosn));
      localStorage.setItem("dbdetails", JSON.stringify(this.reuiredJosn));
      console.log(this.lsdataToStoreTemp);
    }


  }
  addSourceAuthType(): void {
    //alert();
    this.addSourceSecurities = this.AuthTypeSourceForm.get('addSourceSecurities') as FormArray;
    this.addSourceSecurities.push(this.TargetSecurityArray());
    console.log(this.AuthTypeSourceForm.value.addSourceSecurities)

  }

  deleteSourceAuthType(index) {
    this.addSourceSecurities.removeAt(index);

  }
  saveAuthType() {
    console.log(this.AuthTypeSourceForm.value)
  }
}
