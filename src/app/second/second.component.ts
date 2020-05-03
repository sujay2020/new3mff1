import { Component, OnInit } from '@angular/core';
import { DbDetailsService } from '../shared/db-details.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { MatTableDataSource } from '@angular/material';
 
export interface TestCaseElement {
  testcase: number;
  input: string;
  output: string;
  package: string;
  services : string;
  server: string;
  desc:string
  
}

export interface TableCaseDataToDisplay {
  testType : string;
  testId : number;
  testCase : Object;
   
}

let ELEMENT_DATA: TableCaseDataToDisplay[] = [];

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
 
  data1:string[] = [];
  data2:any;
  data3:any;
  template1:any;
  serverIp:any;
  inputData: string[] = [];
  outputData: string[] = [];
  inputValueToDisplay: string[]=[];
  outValueToDisplay: string[]=[];
  pkgname: any;
  serverdetails: any;
  selected: any;
  selectedServices: any;
  inputJson:any;
  outputJson:any;
  ip: any;
  password: any;
  port: any;
  serverName: any;
  userName: any;
  sid: any;
  desc: any;
  server: any;
  templateData:any;
  hitMethodResponse: {};
  inputoutput :boolean;
  description : string;
  testData : boolean;
  //For Binding From Table to EDIT
  template2:any;
  testcase: string;
  input : string;
  output: string;
  package: string;
  services : string;
  serverTable: string;
  descTable:string

  newArrayDataTODisplayInTable : TestCaseElement[] =[];
  newDataTODisplayInTable : TestCaseElement;
  dummyTestData = [];
  // dummyTestData = [
  //   {
  //   "testcase":"td001",
  //   "desc":"Testdesc",
  //   "server":"Server-1",
  //   "package":"WmTest",
  //   "services":"QWMtestFlow",
  //   "input":{"debugFlag":"adfds","inEDIDoc":"dsfdas","inTxnName":"afdsf"},
  //   "output":{"debugFlag":"adfds"}
  //   },
  //   {
  //   "testcase":"td002",
  //   "desc":"Testdesc",
  //   "server":"Server-1",
  //   "package":"WmTest",
  //   "services":"QWMtestFlow",
  //   "input":{"debugFlag":"adfds","inEDIDoc":"dsfdas","inTxnName":"afdsf"},
  //   "output":{"debugFlag":"adfds"}
  //   },
  //   {
  //   "testcase":"td003",
  //   "desc":"Testdesc",
  //   "server":"Server-1",
  //   "package":"WmTest",
  //   "services":"QWMtestFlow",
  //   "input":{"debugFlag":"adfds","inEDIDoc":"dsfdas","inTxnName":"afdsf"},
  //   "output":{"debugFlag":"adfds"}
  //   },
  //   {
  //   "testcase":"td004",
  //   "desc":"Testdesc",
  //   "server":"Server-1",
  //   "package":"WmTest",
  //   "services":"QWMtestFlow",
  //   "input":{"debugFlag":"adfds","inEDIDoc":"dsfdas","inTxnName":"afdsf"},
  //   "output":{"debugFlag":"adfds"}
  //   }
  //   ];
  idToEdit: any;
  updateTestCase: {};
  dummyDataToManupilate =[];
  JSONdata: any;
  dataJson: Object;
  jms: any;
  fileSystem: any;
  testcaseNum: any;
  allTestCase1: any;
  testId: any;
  testType: any;
//   dummyDataToManupilate =[ 

//     { 

//         "TESTID": 14, 

//         "DESCRIPTION": "Testdesc", 

//         "SERVER": "Server-1", 

//         "PACKAGE": "WmTest", 

//         "SERVICES": "QWMtestFlow", 

//         "INPUT": "{\"debugFlag\":\"adfds\",\"inEDIDoc\":\"dsfdas\",\"inTxnName\":\"afdsf\"}", 

//         "OUTPUT": "{\"debugFlag\":\"adfds\"}" 

//     }, 

//     { 

//         "TESTID": 15, 

//         "DESCRIPTION": "Testdesc", 

//         "SERVER": "Server-1", 

//         "PACKAGE": "WmTest", 

//         "SERVICES": "QWMtestFlow", 

//         "INPUT": "{\"debugFlag\":\"adfds\",\"inEDIDoc\":\"dsfdas\",\"inTxnName\":\"afdsf\"}", 

//         "OUTPUT": "{\"debugFlag\":\"adfds\"}" 

//     }, 

//     { 

//         "TESTID": 16, 

//         "DESCRIPTION": "Testdesc", 

//         "SERVER": "Server-1", 

//         "PACKAGE": "WmTest", 

//         "SERVICES": "QWMtestFlow", 

//         "INPUT": "{\"debugFlag\":\"adfds\",\"inEDIDoc\":\"dsfdas\",\"inTxnName\":\"afdsf\"}", 

//         "OUTPUT": "{\"debugFlag\":\"adfds\"}" 

//     } 

// ] ;
  constructor(private dbservice:DbDetailsService , private localstorage: LocalStorage) { }
 
  ngOnInit() {
   // this.convertTheData();
   this.selectTestCaseMethod();
    this.get1Details();
  //  this.get2Details();
   // this.get3Details();
    this.getServerDetails();
    debugger
    if(localStorage.getItem("ip")==null){
    //  alert(null);
      this.serverIp = "Please Select Value"
    }else{
      let server = JSON.parse(localStorage.getItem("ip"));
      this.serverIp = server.serverName;
      this.ip = server.ip;
      this.password = server.password;
      this.port = server.port;
      this.serverName = server.serverName;
      this.userName = server.userName;
      this.sid = server.sid;
      this.desc = server.desc;

    }
    
    
    //alert("serverIp :- "+(this.serverIp))
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 // displayedColumns: string[] = ['testcase', 'server', 'package','services','desc', 'name', 'weight','action'];
 displayedColumns: string[] = ['testcase', 'testId', 'desc', 'server', 'package', 'services', 'input', 'output','action']; 
 dataSource = new MatTableDataSource(ELEMENT_DATA);
  ELEMENT_DATA= this.dummyTestData;

  convertTheData(){
    this.newArrayDataTODisplayInTable = [];
    
    this.dbservice.getAllTestCase().subscribe(data=>{
     // alert(JSON.stringify(data['alltestcases']['alltestcase']));
      debugger
      this.dummyDataToManupilate=(data['alltestcases']['alltestcase']);
      for (let index = 0; index < this.dummyDataToManupilate.length; index++) {
        const element = this.dummyDataToManupilate[index];
        this.newDataTODisplayInTable=null;
       
        this.newDataTODisplayInTable ={
          "testcase": element.TESTID,
          "desc": element.DESCRIPTION,
          "package":element.PACKAGE,
        "server": element.SERVER,
        "services": element.SERVICES,
        "output": JSON.parse(element.OUTPUT.replace("\\","")),
        "input": JSON.parse(element.INPUT.replace("\\",""))
        }
        this.newArrayDataTODisplayInTable.push(this.newDataTODisplayInTable);
      }
      this.dummyTestData = this.newArrayDataTODisplayInTable;
      console.log("this.newArrayDataTODisplayInTable - "+ JSON.stringify(this.newArrayDataTODisplayInTable));
      ELEMENT_DATA= this.dummyTestData;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    },err=>{
      
    })

  }

  cancel(){
    this.idToEdit="";
    this.testData = false;
  }
  get1Details(){
    // this.store.dispatch(new AddDb(dbdetail));
    this.dbservice.get1Data(this.ip,this.port,this.userName,this.password).subscribe(data=>{
      //alert(JSON.stringify(data['packages']));
      this.data1=(data['packages']);
    },err=>{
      
    })
     
   }
   get2Details(valueOfPkg){
    // this.store.dispatch(new AddDb(dbdetail));
    //this.dbservice.getOld2Data(valueOfPkg).subscribe(data=>{
      this.dbservice.get2Data(this.ip,this.port,this.userName,this.password,valueOfPkg).subscribe(data=>{
      this.data2=data['services'];
    },err=>{
      
    })
     
   }

   getServerDetails(){
    // this.store.dispatch(new AddDb(dbdetail));
    this.dbservice.getServerDetails().subscribe(data=>{
      //alert(JSON.stringify(data['servers']['server']));
      this.serverdetails=data['servers']['server'];
    },err=>{
      
    })
     
   }

   packageDetailsChange(event){
    const value = event.target.value;
     //alert(value);
     this.get2Details(value);
   }

   serverDetailsChange(event){
    var value = (event.target.value);
    var res = value.split(",");
    debugger
     //alert(value);
    // alert(this.server);
    
     this.selected="";
     this.selectedServices="";
     this.testcaseNum="TESTID-14",
 this.input=JSON.stringify({ 
  "name": "Test", 
  "age": "29", 
  "city": "Chicago", 
  "state": "Illinois", 
  "country": "USA" 
});;
  this.output=JSON.stringify({ 
    "data": "Test,29,Chicago,Illinois,USA" 
});
   this.jms="testQueue";
  this.fileSystem="file:////u01/IntegrationTesting/";
  this.description="Description"
     this.inputValueToDisplay= [];


    var res = value.split(",");
     this.ip = res[0];
      this.password = res[3];
      this.port = res[1];
      this.serverName = res[6];
      this.userName = res[2];
      this.sid = res[5];
      this.desc = res[4];
      this.get1Details();
   }
debugger;
   servicesDetailsChange(event,x){
    // alert(this.selected);
    //this.selectedServices;
    this.inputoutput = false;
    const value = event.target.value;
    // alert(value.replace(":","/"));
    var res = value.replace(":","/");
     this.get3Details(res);
   }
   edited(element,x){
    //alert("Services :- "+this.services)
    //alert(JSON.stringify(element));
    //alert(x);
    
    this.testData = true;
    this.idToEdit = x;
    this.testcase  = element.testcase;
    this.input = JSON.stringify(element.testCase.input);
    this.output = JSON.stringify(element.testCase.output);
    this.package = element.testCase.package;
    this.services  = element.testCase.services;
    this.serverTable = element.testCase.server;
    this.descTable = element.testCase.desc;
    this.testId = element.testId;
    this.testType = element.testType;

  }
  saveTheEdited(element){
    debugger
    alert(JSON.stringify(element));
    var inputToUpdate = JSON.stringify(this.input);
    //alert(JSON.parse(inputToUpdate))
    this.updateTestCase = { 
      "testType": this.testType, 
      "test": { 
            "desc":this.descTable, 
            "server": this.serverTable, 
            "package": this.package, 
          "services": this.services, 
          "input": JSON.parse(this.input), 
           "output": JSON.parse(this.output)
       } 
  } 
    alert(JSON.stringify(this.updateTestCase));
    this.dbservice.updateTestCase(element.testId,this.updateTestCase).subscribe(data=>{
     // alert(JSON.stringify(data));
      window.location.reload();
    },err=>{
      
    })

  }
   get3Details(valueOfServicename){
    
    // this.store.dispatch(new AddDb(dbdetail));
    this.dbservice.get3Data(this.ip,this.port,this.userName,this.password,valueOfServicename).subscribe(data=>{
      this.data3=data;
      this.inputData=data['input']['rec_fields'];
      this.outputData=data['output']['rec_fields'];
      
      
      for (let index = 0; index < this.inputData.length ; index++) {
         const element = this.inputData[index];
         this.inputValueToDisplay.push(element['field_name']);
      }
      for (let index = 0; index < this.outputData.length ; index++) {
        const element = this.outputData[index];
        this.outValueToDisplay.push(element['field_name']);
      }

       

    },err=>{
      
    })
     
   }
   hitTheServices(){
  //   this.outputJson="";
  //   this.inputJson="";
  //   //this.inputoutput = true;
  //   debugger
  //   for (var index = 0; index < this.inputData.length ; index++) {
  //     debugger
  //     //const element1 = document.getElementById(index).value;
  //     //alert(this.inputData[index].field_name);
  //     var tagName = this.inputData[index];
  //   //  alert(tagName['field_name']);
  //     const element2 = document.getElementsByName(tagName['field_name'])[0];
  //   //  alert( tagName['field_name']+"   "+element2['value']); 
  //     this.inputJson+="\""+tagName['field_name']+"\":\""+element2['value']+"\","
  //   }
  //   //this.inputData.endsWith(",");
  //   //alert(this.inputJson.substring(0,this.inputJson.length-1));

  //   for (var index = 0; index < this.outputData.length ; index++) {
  //     debugger
  //     //const element1 = document.getElementById(index).value;
  //     //alert(this.outputData[index].field_name);
  //     var tagName = this.outputData[index];
  //    // alert(tagName['field_name']);
  //     const element2 = document.getElementsByName(tagName['field_name']+'out')[0];
  //    // alert( tagName['field_name']+"   "+element2['value']); 
  //     this.outputJson+=""+tagName['field_name']+":"+element2['value']+","
  //   }
  //  // alert(this.outputJson.substring(0,this.outputJson.length-1));
  //   this.hitMethodResponse = {
  //     "desc":this.description,
  //     "server":this.serverName,
  //     "package":this.selected,
  //     "services":this.selectedServices,
  //     "input":JSON.parse( "{"+ this.inputJson.substring(0,this.inputJson.length-1) +"}"),
  //     "output":JSON.parse("{"+ this.outputJson.substring(0,this.outputJson.length-1) +"}")
  //   }
  //   //alert(JSON.stringify(this.hitMethodResponse));

  this.JSONdata={
    serverIp:this.serverName,
    selected:this.selected,
    selectedServices:this.selectedServices,
    testcaseNum: this.testcaseNum,
  input: this.input,
  output:this.output,
  jms: this.jms,
  fileSystem:this.fileSystem,
  description:this.description
  }
  debugger
  alert(JSON.stringify(this.JSONdata))
    this.dbservice.addTestCase(this.JSONdata).subscribe(data=>{
      alert(JSON.stringify(data));
      //this.dataJson=data;
      
    },err=>{
      
    })
  
   }
   templateDetailsChange(event){
this.templateData=event.target.value;
   }

   selectTestCaseMethod(){
    this.dbservice.selectAllTestCase().subscribe((data=>{
      
      var newTestCase1 = data['tests']['test'];
      this.allTestCase1 =  data['tests']['test'];
      console.log("i want this" + JSON.stringify(this.allTestCase1))
     // for(var i=0;i<=this.allTestCase;i++){

     // }
     ELEMENT_DATA= this.allTestCase1;
     this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }))
  }
}