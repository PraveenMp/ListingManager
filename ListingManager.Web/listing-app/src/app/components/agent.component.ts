import { Component, OnInit } from '@angular/core';
import { AgentService } from 'app/services/agent.services';
import { IAgent } from 'app/interfaces/IAgent';
import { Agent } from 'app/models/agent';
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";
import { PagerService } from 'app/shared/pagination.services';
import * as _ from 'underscore';

@Component({
    selector: 'agent',
    templateUrl: './agent.component.html',
    styles:['li.page-item.disabled { cursor: not-allowed;} a { cursor:pointer}']
})

export class AgentComponent implements OnInit {
    showForm: boolean = false;
    agents: IAgent[];
    errorMessage: boolean = false;
    agent = new Agent();

    constructor(private agentServices: AgentService,private pagerService:PagerService) {

    }
    ngOnInit() {
        this.agentServices.getAgents().subscribe(response => {
            if (response.length !=0) {
                this.agents = response;
                 this.setPage(1);
            } else {
                this.errorMessage = true;
            }
        })
    }

    getAllAgents() {
        this.agentServices.getAgents().subscribe(response => {
          if (response.length !=0) {
                this.agents = response;
                 this.setPage(1);
            } else {
                this.errorMessage = true;
            }
        })
    }
    onSubmit() {
        if (typeof this.agent.AgentId == 'undefined') {
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
        //Todo: Confirm Window
        this.agentServices.deleteAgent(agentId).subscribe(response => {
            console.log("delete");
            if (response != null) {
                this.getAllAgents();
            } else {
                this.errorMessage = true;
            }
        })
    }

    cancel() {
        this.agent = new Agent();
        this.showForm=false;
    }

     onClickResult:IStarRatingOnClickEvent;
    onHoverRatingChangeResult:IStarRatingIOnHoverRatingChangeEvent;
    onRatingChangeResult:IStarRatingOnRatingChangeEven;
 
    onClick = ($event:IStarRatingOnClickEvent) => {
        this.onClickResult = $event;
    };
 
    onRatingChange = ($event:IStarRatingOnRatingChangeEven) => {
       // console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };
 
    onHoverRatingChange = ($event:IStarRatingIOnHoverRatingChangeEvent) => {
      //  console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };




    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];
    
      setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.agents.length, page,3);

        // get current page of items
        this.pagedItems = this.agents.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
