import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { AgentService } from 'app/services/agent.services';
import { OpenHouseService } from 'app/services/openhouse.services';

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
    HttpModule,
    FormsModule
  ],
  providers: [
    AppHelpersService,
    ListingsService,
    AgentService,
    OpenHouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
