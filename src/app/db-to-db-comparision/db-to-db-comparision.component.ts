import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-db-to-db-comparision',
  templateUrl: './db-to-db-comparision.component.html',
  styleUrls: ['./db-to-db-comparision.component.css']
})
export class DbToDbComparisionComponent implements OnInit {
 
  TypeDb:any = "oracle";
  UrlName:any = "";
  userName:any = "";
  password:any = "";
  tableName:any = "";
  columnName:any = "";
  tTypeDb:any = "";
  tUrlName:any = "";
  tuserName:any = "";
  tpassword:any = "";
  tTableName:any = "";
  tColumnName:any = "";
  dbToDbData: { source: { driver: string; jdbcUrl: string; userName: string; password: string; query: string; }; target: { driver: string; jdbcUrl: string; userName: string; password: string; query: string; }; };
  condition: string = "";
  tcondition: string = "";
  constructor() { }

  ngOnInit() {
    
  }

  
  autoRenew = new FormControl();
  onChange() {
   // alert(JSON.stringify(this.autoRenew.value));
    if(this.autoRenew.value){
      this.tTypeDb=this.TypeDb;
      this.tUrlName=this.UrlName;
      this.tuserName=this.userName;
      this.tpassword=this.password;
    }else{
      this.tTypeDb="";
      this.tUrlName="";
      this.tuserName="";
      this.tpassword="";
    }
  } 

  SaveTest() {
    if(this.TypeDb=="mysql"){
      this.TypeDb = "com.mysql.jdbc.driver"
    }else if (this.TypeDb=="postgre"){
      this.TypeDb = "com.postgre.jdbc.driver"
    }else if (this.TypeDb=="oracle"){
      this.TypeDb = "oracle.jdbc.driver.OracleDriver"
    }
   //alert(this.TypeDb+"\n"+this.UrlName+"\n"+this.userName+"\n"+this.password+"\n"+this.tableName+"\n"+this.columnName);
   if(this.tTypeDb=="mysql"){
    this.tTypeDb = "com.mysql.jdbc.driver"
  }else if (this.tTypeDb=="postgre"){
    this.tTypeDb = "com.postgre.jdbc.driver"
  }else if (this.tTypeDb=="oracle"){
    this.tTypeDb = "oracle.jdbc.driver.OracleDriver"
  }
   this.dbToDbData = {
    "source": {
        "driver": this.TypeDb,
        "jdbcUrl": this.UrlName,
        "userName": this.userName,
        "password": this.password,
        "query": "select "+this.columnName+" from "+this.tableName+" where "+this.condition
    },
    "target": {
        "driver":  this.tTypeDb,
        "jdbcUrl":  this.tUrlName,
        "userName": this.tuserName,
        "password":this.tpassword,
        "query": "select "+this.tColumnName+" from "+this.tTableName+" where "+this.tcondition
    }
 };
 alert(JSON.stringify(this.dbToDbData));
  }

  SourceDB() {
    this.tTypeDb=this.TypeDb;
    this.tUrlName=this.UrlName;
    this.tuserName=this.userName;
    this.tpassword=this.password;
  }
  
  RunTest() {
    alert("Run Successfull");
  }

}

