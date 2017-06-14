import { Component, OnInit } from '@angular/core';
import { ListingsService } from 'app/services/listings.services';
import { Ilisting } from 'app/interfaces/Ilistings';

@Component({
  selector: 'listing',
 templateUrl:'./listing.component.html'
})
export class ListingComponent implements OnInit  {
listings:Ilisting;
errorMessage:boolean=false;
    constructor(private listingService:ListingsService) {

    }
    ngOnInit() {
            this.listingService.getListings().subscribe(response => {
                if(response != null) {
                this.listings=response; 
            }else {
                this.errorMessage=true;
            }
            })
    }

}