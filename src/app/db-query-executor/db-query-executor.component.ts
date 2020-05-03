import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-query-executor',
  templateUrl: './db-query-executor.component.html',
  styleUrls: ['./db-query-executor.component.css']
})
export class DbQueryExecutorComponent implements OnInit {

  responseDataToDisplay: boolean;

  constructor() { }

  ngOnInit() {
    
  }
  addSenarioDetails(){
    this.responseDataToDisplay=true;
  }
  mapArray = [
    {
      "Test Matches": 320,
      "Runs": 17500, 
      "High Score": 242,
      "Batting Avg": 65.42,
      "Wickets": 14,
      "Bowling Avg": 31.76,
      "Best Bowling": "1/34",
      "Catches": 173
      
    }
  ]
}