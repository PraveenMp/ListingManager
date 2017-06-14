import { Component, OnInit } from '@angular/core';
import { AgentService } from 'app/services/agent.services';
import { IAgent } from 'app/interfaces/IAgent';
export class Agent {
    constructor(
        public AgentId?: number,
        public AgentName?: string,
    ) { }
}
@Component({
    selector: 'agent',
    templateUrl: './agent.component.html'
})

export class AgentComponent implements OnInit {
    showForm: boolean = false;
    agents: IAgent;
    errorMessage: boolean = false;
    agent = new Agent();

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

    getAllAgents() {
        this.agentServices.getAgents().subscribe(response => {
            if (response != null) {
                this.agents = response;
            } else {
                this.errorMessage = true;
            }
        })
    }
    onSubmit() {
        if (typeof this.agent.AgentId == undefined) {
            console.log("Save");
            this.agentServices.saveAgent(this.agent).subscribe(response => {
                if (response != null) {
                    this.getAllAgents();
                    this.showForm = false;
                } else {
                    this.errorMessage = true;
                }
            })
        }
        else {
            this.agentServices.updateAgent(this.agent).subscribe(response => {
                 console.log("Update");
                if (response != null) {
                    this.getAllAgents();
                    this.showForm = false;
                } else {
                    this.errorMessage = true;
                }
            })
        }

    }
    updateAgent(updateAgent) {
        this.agent = updateAgent;
        this.showForm = true;
    }

    deleteAgent(agentId) {
        console.log(agentId);
          this.agentServices.deleteAgent(agentId).subscribe(response => {
                 console.log("delete");
                if (response != null) {
                    this.getAllAgents();
                } else {
                    this.errorMessage = true;
                }
            })
    }
}
