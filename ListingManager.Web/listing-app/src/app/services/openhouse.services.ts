import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { IOpenHouse } from 'app/interfaces/IOpenHouse'

import { AppHelpersService } from 'app/services/app-helper.services';

@Injectable()
export class OpenHouseService {


    constructor(private http: Http, private appHelpersSvc: AppHelpersService) {
    }

    getOpenHouseDetails() {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "openhouse",
            { headers: httpHeaders })
            .map((response: Response) => <IOpenHouse>response.json()).catch(this.handleError);
    }


    saveOpenHouse(listing) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.post(this.appHelpersSvc.apiAddress + "openhouse", JSON.stringify(listing),
            { headers: httpHeaders })
            .map((response: Response) => <IOpenHouse>response.json()).catch(this.handleError);
    }

    updateOpenHouse(agent) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.put(this.appHelpersSvc.apiAddress + "openhouse", JSON.stringify(agent),
            { headers: httpHeaders })
            .map((response: Response) => <IOpenHouse>response.json()).catch(this.handleError);
    }

    deleteOpenHouse(openhouseId) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.delete(this.appHelpersSvc.apiAddress + "openhouse/" + openhouseId,
            { headers: httpHeaders })
            .map((response: Response) => <IOpenHouse>response.json()).catch(this.handleError);
    }
    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}