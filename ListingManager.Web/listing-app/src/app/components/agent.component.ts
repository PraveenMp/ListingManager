import { Component, OnInit } from '@angular/core';
import { AgentService } from 'app/services/agent.services';
import { IAgent } from 'app/interfaces/IAgent';
export class Agent {
  constructor(
    public AgentId?: number,
    public AgentName?: string,
  ) {  }
}
@Component({
    selector: 'agent',
    templateUrl: './agent.component.html'
})

export class AgentComponent implements OnInit {
    showForm: boolean = false;
    agents: IAgent;
    errorMessage:boolean=false;
    agent=new Agent();

    constructor(private agentServices: AgentService) {

    }
    ngOnInit() {
        this.agentServices.getAgents().subscribe(response => {
            if (response != null) {
                this.agents = response;
            } else {
                this.errorMessage = true;
            }
        })
    }
    addAgents() {

    }
}
