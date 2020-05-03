import { Component, OnInit, Input } from '@angular/core';
import { DbDetailsService } from '../shared/db-details.service';

@Component({
  selector: 'app-senario-one',
  templateUrl: './senario-one.component.html',
  styleUrls: ['./senario-one.component.css']
})
export class SenarioOneComponent implements OnInit {
  responseDataToDisplay:Object;
  @Input() server: any;
  @Input() packageDetails: any;
  @Input() services: any;
  constructor(private dbservice:DbDetailsService) { }

  testcaseNum:string = "TESTID-14";
  input:string= JSON.stringify({ 
    "name": "Test", 
    "age": "29", 
    "city": "Chicago", 
    "state": "Illinois", 
    "country": "USA" 
});
  output:string = JSON.stringify({ 
    "data": "Test,29,Chicago,Illinois,USA" 
});
  jms:string = "testQueue";
  fileSystem:string = "file:////u01/IntegrationTesting/";
  displayedColumns2: string[] = ['key', 'value'];
  dataSource2 = this.responseDataToDisplay;
  template1:any;
  ngOnInit() {
    this.template1={
      "testcaseNum":"TESTID-14",
      "input":{ 
        "name": "Test", 
        "age": "29", 
        "city": "Chicago", 
        "state": "Illinois", 
        "country": "USA" 
    },
    "output":{ 
      "data": "Test,29,Chicago,Illinois,USA" 
    },
    "jms":"testQueue",
    "fileSystem":"file:////u01/IntegrationTesting/",
    "displayedColumns2":['key', 'value']
    }
  }

  addSenarioDetails(addform){
console.log(addform);
    let dataToApi = {
     
      "input":JSON.parse(this.input),
      "output":JSON.parse(this.output),
     
      "fileLocation":this.fileSystem,
    }
  //   this.responseDataToDispaly = {
  //     "fileComparisonStatus": "The data inside the files are identical.",
  //     "actualDataInTheFile": "Test,29,Chicago,Illinois,USA",
  //     "dataSentForCompare": "Test,29,Chicago,Illinois,USA",
  //     "fileName": "def4b202-6e24-4736-a73b-364d602f4784.csv"
  // };  
   //alert(JSON.stringify(this.responseDataToDispaly));
    this.dbservice.apiToFile(dataToApi).subscribe(data=>{
       //      alert(JSON.stringify(data));
             this.responseDataToDisplay = data;
    },err=>{
      
    })
  }

}
