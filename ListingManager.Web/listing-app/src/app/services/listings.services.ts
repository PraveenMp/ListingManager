import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Ilisting } from 'app/interfaces/IListings'

import { AppHelpersService } from 'app/services/app-helper.services';

@Injectable()
export class ListingsService {


    constructor(private http: Http, private appHelpersSvc: AppHelpersService) {
    }

    getListings() {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "listing",
            { headers: httpHeaders })
            .map((response: Response) => <Ilisting>response.json()).catch(this.handleError);
    }


    saveAgent(listing) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.post(this.appHelpersSvc.apiAddress + "listing", JSON.stringify(listing),
            { headers: httpHeaders })
            .map((response: Response) => <Ilisting>response.json()).catch(this.handleError);
    }

    updateAgent(agent) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.put(this.appHelpersSvc.apiAddress + "listing", JSON.stringify(agent),
            { headers: httpHeaders })
            .map((response: Response) => <Ilisting>response.json()).catch(this.handleError);
    }

    deleteListing(listingId) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.delete(this.appHelpersSvc.apiAddress + "listing/" + listingId,
            { headers: httpHeaders })
            .map((response: Response) => <Ilisting>response.json()).catch(this.handleError);
    }
    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}