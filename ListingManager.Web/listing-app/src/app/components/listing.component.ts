import { Component, OnInit } from '@angular/core';
import { ListingsService } from 'app/services/listings.services';
import { Ilisting } from 'app/interfaces/Ilistings';
export class Listing {
    constructor(
        public ListingId?: number,
        public ListingName?: string,
        public ListingAddress?: string,
        public ListingAgentId?: string,
    ) { }
}
@Component({
    templateUrl: './listing.component.html'
})
export class ListingComponent implements OnInit {
    showForm: boolean = false;
    listings: Ilisting;
    errorMessage: boolean = false;
    listing = new Listing();
    constructor(private listingService: ListingsService) {

    }
    ngOnInit() {
        this.listingService.getListings().subscribe(response => {
            if (response != null) {
                this.listings = response;
            } else {
                this.errorMessage = true;
            }
        })
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

       onSubmit() {
        if (typeof this.listing.ListingAgentId == 'undefined') {
            console.log("Save");
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
                console.log("Update");
                if (response != null) {
                    this.getAllListings();
                    this.showForm = false;
                } else {
                    this.errorMessage = true;
                }
            })
        }

    }

     cancel() {
        this.listing = new Listing();
        this.showForm=false;
    }

}