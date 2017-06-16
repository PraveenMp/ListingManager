import { Component, OnInit } from '@angular/core';
import { ListingsService } from 'app/services/listings.services';
import { OpenHouseService } from 'app/services/openhouse.services';

import { IOpenHouse } from 'app/interfaces/IOpenHouse';
import { OpenHouse } from 'app/models/openhouse';

@Component({
    selector: 'openhouse',
    templateUrl: './openhouse.component.html'
})
export class OpenHouseComponent implements OnInit {
    showForm: boolean = false;
    openHouselist: IOpenHouse;
    errorMessage: boolean = false;
    openhouse = new OpenHouse();
    listings;

    constructor(private openHouseService: OpenHouseService, private listingService: ListingsService) {

    }

    ngOnInit() {
        this.openHouseService.getOpenHouseDetails().subscribe(response => {

            if (response.length != 0) {
                this.openHouselist = response;
                console.log(this.openHouselist)
            } else {
                this.errorMessage = true;
            }
        })

        this.listingService.getListings().subscribe(response => {
            if (response.length != 0) {
                this.listings = response;
                this.openhouse.Listing = this.listings;
            }
        })
    }

    getAllOpenHouse() {
        this.openHouseService.getOpenHouseDetails().subscribe(response => {
            if (response.length != 0) {
                this.openHouselist = response;
            } else {
                this.errorMessage = true;
            }
        })
    }

    addOpenHouse() {
        this.openhouse = new OpenHouse();
        this.openhouse.Listing = this.listings;
    }

    onSubmit() {
        if (typeof this.openhouse.OpenHouseId == 'undefined') {
            this.openHouseService.saveOpenHouse(this.openhouse).subscribe(response => {
                if (response.length != 0) {
                    this.getAllOpenHouse();
                    this.showForm = false;
                } else {
                    this.errorMessage = true;
                }
            })
        }
        else {
            this.openHouseService.updateOpenHouse(this.openhouse).subscribe(response => {
                console.log("Update");
                if (response.length != 0) {
                    this.getAllOpenHouse();
                    this.showForm = false;
                } else {
                    this.errorMessage = true;
                }
            })
        }

    }

    updateOpenHouse(updateOpenHouse) {

        this.openhouse = updateOpenHouse;
        this.openhouse.OpenHouseBeginDate = this.convertDate(updateOpenHouse["OpenHouseBeginDate"]);
        this.openhouse.OpenHouseEndDate = this.convertDate(updateOpenHouse["OpenHouseEndDate"]);
        this.openhouse.ListingId = updateOpenHouse["ListingId"];
        this.openhouse.Listing = this.listings;
        console.log(this.openhouse);
        this.showForm = true;
    }

    deleteOpenHouse(openhouseId) {
        //Todo: Confirm Window
        this.openHouseService.deleteOpenHouse(openhouseId).subscribe(response => {
            console.log("delete");
            if (response != null) {
                this.getAllOpenHouse();
            } else {
                this.errorMessage = true;
            }
        })
    }
    cancel() {
        this.openhouse = new OpenHouse();
        this.showForm = false;
    }

    convertDate(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return new Date([mnth,day,date.getFullYear()].join("/"));
    }



}