import { Listing } from 'app/models/listing'

export class OpenHouse {
    constructor(
        public OpenHouseId?: number,
        public OpenHouseBeginDate?: Date,
        public OpenHouseEndDate?: Date,
        public ListingId?:number,
        public Listing?: Listing[],
    ) { }
}