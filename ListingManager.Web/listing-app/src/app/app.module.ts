import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgentComponent } from './components/agent.component';
import { ListingComponent } from './components/listing.component';
import { OpenHouseComponent } from './components/openhouse.component';
import { AppRouterModule } from './app.routing';

import { AppHelpersService } from 'app/services/app-helper.services';
import { ListingsService } from 'app/services/listings.services';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    ListingComponent,
    OpenHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [
    AppHelpersService,
    ListingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
