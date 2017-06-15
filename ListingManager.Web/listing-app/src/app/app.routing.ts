import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentComponent } from './components/agent.component';
import { ListingComponent } from './components/listing.component';
import { OpenHouseComponent } from './components/openhouse.component';
import { PageNotFoundComponent } from './shared/pagenotfound.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AgentComponent
    },
    {
        path: 'agent',
        component: AgentComponent
    },
    {
        path: 'listing',
        component: ListingComponent
    },
    {
        path: 'openhouse',
        component: OpenHouseComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    declarations: [
        PageNotFoundComponent
    ],
    exports: [RouterModule]
})

export class AppRouterModule {
}



