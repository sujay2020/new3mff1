import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbEntries } from 'src/app/model/dbEntries.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbDetailsService {
  

  URL=environment.configurationUrl;
  
  constructor(private http: HttpClient) { }

  addTestCase(addDetails){
    return this.http.post("http://10.1.11.63:8280/integrationtest/inserttestcase",addDetails);
  }

  getAllTestCase(){
    return this.http.get("http://10.1.11.63:8280/integrationtest/selectalltestcase/");
  }

  updateTestCase(testcaseId,updateDetails){
    return this.http.put("http://10.1.11.63:8280/integrationtest/updatetestcase/"+testcaseId,updateDetails);
  }

  addServerDetails(jsonToSend) {
    return this.http.post("http://10.1.11.63:8280/integrationtest/insertserverinfo",jsonToSend);
  }
  addNewDbData(dbData) {
    return this.http.post<DbEntries>(this.URL + 'db-details', dbData);
  }
  postToApiCall(apiData) {
    return this.http.post('http://10.1.11.63:8280/soapToDB', apiData);
  }
 getquinnox(jsonToSend)
 {
   return this.http.get('http://10.1.11.63:5555/invoke/wm.server/ping',jsonToSend)
 }
  apiToFile(value){
    return this.http.post('http://10.1.11.63:8280/apiToFile', value);
  }

  getServerDetails() {
    return this.http.get("http://10.1.11.63:8280/integrationtest/selectallserverinfo/");
  } 

get1Data(ip,port,userName,password) {
  let appendToApiCall = ""+ip+"/"+port+"/"+userName+"/"+password
  if(port==null ||port ==""){
    appendToApiCall = "10.1.11.63/5555/Administrator/manage"
  }
return this.http.get("http://10.1.11.63:8280/listpackage/"+appendToApiCall);
}
get2Data(ip,port,userName,password,pkgName) {
  let appendToApiCall = ""+ip+"/"+port+"/"+userName+"/"+password+"/"+pkgName;
  if(port==null ||port ==""){
    appendToApiCall = "10.1.11.63/5555/Administrator/manage/QWmTest"
  }
return this.http.get("http://10.1.11.63:8280/getservices/"+appendToApiCall);
  }
get3Data(ip,port,userName,password,serName) {
  let appendToApiCall = ""+ip+"/"+port+"/"+userName+"/"+password+"/"+serName
  if(port==null ||port ==""){
    appendToApiCall = "10.1.11.63/5555/Administrator/manage"
  }
return this.http.get("http://10.1.11.63:8280/getservicesignature/"+appendToApiCall);
  } 
  
  getOld2Data(valueOfPkg) {
    return this.http.get("https://5e9e7e2bfb467500166c406c.mockapi.io/firstListPackages/data2");
      }
    getOld3Data(valueOfServicename) {
    return this.http.get("https://5e9e7e2bfb467500166c406c.mockapi.io/firstListPackages/data3");
      } 
getQuinnox(jsonData){
  return this.http.get("http://10.1.11.63:5555/invoke/wm.server/ping",jsonData)
}
selectAllTestCase(){
  // return this.http.get('http://10.1.11.63:8280/integrationtest/selectalltestcase/');
  return this.http.get<any>('http://www.mocky.io/v2/5ea9167a2d0000d54e3a42a2');
}

insert(){
  var data={
    "testType": "DBToDB",
    "test": {
        "input": {
            "source": {
                "driver": "com.mysql.jdbc.Driver",
                "jdbcUrl": "jdbc:mysql://localhost:3306/wso2?characterEncoding=utf8",
                "userName": "root",
                "password": "root",
                "query": "select um_user_name,um_id as Count from um_user where um_id=1"
            },
            "output": {
                "target": {
                    "driver": "com.mysql.jdbc.Driver",
                    "jdbcUrl": "jdbc:mysql://localhost:3306/wso2?characterEncoding=utf8",
                    "userName": "root",
                    "password": "root",
                    "query": "select um_user_name,um_id as Count from um_user where um_id=2"
                }
            }
        }
    }
};

return this.http.post('http://10.1.11.63:8280/integrationtest/inserttestcase', data);
}


}
