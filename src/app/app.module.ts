import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';

import { DialogModule } from 'primeng/dialog';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
//import { SharedModule, PanelModule } from 'primeng/';
import { MatTabsModule } from '@angular/material';
//import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectorsComponent } from './connectors/connectors.component';
import { AppServerDetailsComponent } from './app-server-details/app-server-details.component';
import { SenarioOneComponent } from './senario-one/senario-one.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DbToDbComparisionComponent } from './db-to-db-comparision/db-to-db-comparision.component';
import { DbQueryExecutorComponent } from './db-query-executor/db-query-executor.component';
import { FourthComponent } from './fourth/fourth.component';
//import { TableModule } from 'primeng/table';
const appRoutes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'Dashboard', component: DashboardComponent,
    children: [
      { path: 'first', component: FirstComponent},
      { path: 'server', component: AppServerDetailsComponent},
      { path: 'connectors', component: ConnectorsComponent},
      { path: 'testSenarioOne', component: SenarioOneComponent},
      { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
      { path: 'db-to-db', component: DbToDbComparisionComponent},
      { path: 'query-executor', component: DbQueryExecutorComponent},
      {path:'fourth',component:FourthComponent}
      ]}
 
  
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondComponent,
    FirstComponent,
    LoginComponent,DashboardComponent, ConnectorsComponent, 
    AppServerDetailsComponent, SenarioOneComponent, MyDialogComponent,
    DbToDbComparisionComponent,
    DbQueryExecutorComponent,FourthComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
   
    DialogModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    CustomMaterialModule,
    HttpClientModule,
    MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSlideToggleModule
  
  ],
  entryComponents:[MyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
