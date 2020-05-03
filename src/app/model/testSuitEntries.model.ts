
export class TestSuits {
    id: number;
    name: string;
    type: string;
    testCases: Testcases[];
}

export class Testcases {
    id: number;
    name: string;
    sourceApiId: number;
    targetApiId: number;
    apiToApiFieldValidation: apiToApiFieldValidation[];
    apiToDbFieldValidation: apiToDbFieldValidation[];
    performanceTest: performanceTest[];
    security:security[];
}
export class apiToApiFieldValidation {
    id: number;
    sourceField: string;
    targetField: string;
    status: string;
}

export class apiToDbFieldValidation{
    id: number;
    source_field: string;
    target_db_query: string;
    alias:string;
}

export class security{
    id:number;
    authUserName:string;
    authPassword:string;
    tokenValue:string;
}
export class performanceTest {
    id: number;
    threadValue: number;
    rampUp: number;
}

export class QueriesEntries{
    id: Number;
    source_field: String;
    target_db_query: String;
    alias: String;
    sourceQuery:string;
    targetQuery:string;
}