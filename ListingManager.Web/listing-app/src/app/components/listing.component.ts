import { Component, OnInit } from '@angular/core';
import { ListingsService } from 'app/services/listings.services';
import { AgentService } from 'app/services/agent.services';

import { Ilisting } from 'app/interfaces/Ilistings';
import { Listing } from 'app/models/listing';

export interface IToolTip{
    title:string,
    content:string
}

@Component({
    templateUrl: './listing.component.html'
})
export class ListingComponent implements OnInit {
    showForm: boolean = false;
    listings: Ilisting;
    errorMessage: boolean = false;
    listing = new Listing();
    agentList;
    tooltip:IToolTip;

    constructor(private listingService: ListingsService, private agentServices: AgentService) {

    }
    ngOnInit() {
        this.listingService.getListings().subscribe(response => {
           if (response.length !=0) {
                this.listings = response;
            } else {
                this.errorMessage = true;
            }
        })

        this.agentServices.getAgents().subscribe(response => {
           if (response.length !=0) {             
                this.listing.Agent = response;
                this.agentList= response;
            } else {
                this.errorMessage = true;
            }
        })
        var tooltipdata= { 'title':"TestingToolTip",'content':'Testing data Testing data Testing Data Testing Data' }
        this.tooltip=tooltipdata;

    }

    getAllListings() {
        this.listingService.getListings().subscribe(response => {
            if (response != null) {
                this.listings = response;
            } else {
                this.errorMessage = true;
            }
        })
    }
    addListing() {
        this.listing=new Listing();
        this.listing.Agent=this.agentList;
    }

    onSubmit() {
        if (typeof this.listing.ListingId == 'undefined') {
            this.listingService.saveAgent(this.listing).subscribe(response => {
                if (response != null) {
                    this.getAllListings();
                    this.showForm = false;
                } else {
                    this.errorMessage = true;
                }
            })
        }
        else {
            this.listingService.updateAgent(this.listing).subscribe(response => {
                if (response != null) {
                    this.getAllListings();
                    this.showForm = false;
                } else {
                    this.errorMessage = true;
                }
            })
        }

    }

    updateListing(updateListing) {
        this.listing = updateListing;
        this.listing.AgentId=updateListing["AgentId"];
        this.listing.Agent=this.agentList;
        this.showForm = true;
    }

    deleteListing(listingId) {
        //Todo: Confirm Window
        this.listingService.deleteListing(listingId).subscribe(response => {
            console.log("delete");
            if (response != null) {
                this.getAllListings();
            } else {
                this.errorMessage = true;
            }
        })
    }
    cancel() {
        this.listing = new Listing();
        this.showForm = false;
    }

}