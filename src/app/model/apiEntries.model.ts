"use strict";
export class ApiEntries{
id:number;
name:string;
url:string;
method:string;
apiValue:string;
inputData:string;
apiKey:string;
contextId:string;
contentType:string;
apiUserName:string;
apiPassword:string;
authUserName:string;
authPassword:string;
tokenValue:string;
authType:AuthType;
}
export class AuthType{
id:number;
type:string;
}
