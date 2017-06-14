import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { IAgent } from 'app/interfaces/IAgent'

import { AppHelpersService } from 'app/services/app-helper.services';

@Injectable()
export class AgentService {

    constructor(private http: Http, private appHelpersSvc: AppHelpersService) {
    }

    getAgents() {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "agent",
            { headers: httpHeaders })
            .map((response: Response) => <IAgent>response.json()).catch(this.handleError);
    }

    saveAgent(agent) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.post(this.appHelpersSvc.apiAddress + "agent", JSON.stringify(agent),
            { headers: httpHeaders })
            .map((response: Response) => <IAgent>response.json()).catch(this.handleError);
    }

    updateAgent(agent) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.put(this.appHelpersSvc.apiAddress + "agent", JSON.stringify(agent),
            { headers: httpHeaders })
            .map((response: Response) => <IAgent>response.json()).catch(this.handleError);
    }

    deleteAgent(agentId) {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.delete(this.appHelpersSvc.apiAddress + "agent/" + agentId,
            { headers: httpHeaders })
            .map((response: Response) => <IAgent>response.json()).catch(this.handleError);
    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}