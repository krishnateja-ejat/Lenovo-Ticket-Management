import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";
import {routes} from './router';
import { CustomFormsModule } from 'ng2-validation'
import {PopupModule} from 'ng2-opd-popup';
import { AppComponent } from './app.component';
import {SelectModule} from 'ng2-select';
import { TicketsCategoryComponent } from './tickets-category/tickets-category.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    TicketsCategoryComponent,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    DataTableModule,
    SelectModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
