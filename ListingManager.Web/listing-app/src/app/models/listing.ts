import { Agent } from 'app/models/agent'

export class Listing {
    constructor(
        public ListingId?: number,
        public ListingName?: string,
        public ListingAddress?: string,
        public AgentId?:number,
        public Agent?: Agent[],
    ) { }
}