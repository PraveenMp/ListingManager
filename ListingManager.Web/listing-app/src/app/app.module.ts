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
import { ToolTipComponent } from 'app/shared/tooltip/tooltip.component';

import { AppHelpersService } from 'app/services/app-helper.services';
import { ListingsService } from 'app/services/listings.services';
import { AgentService } from 'app/services/agent.services';
import { OpenHouseService } from 'app/services/openhouse.services';
import { PagerService } from 'app/shared/pagination.services';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    ListingComponent,
    OpenHouseComponent,
    ToolTipComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
    FormsModule,
    StarRatingModule
  ],
  providers: [
    AppHelpersService,
    ListingsService,
    AgentService,
    OpenHouseService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
