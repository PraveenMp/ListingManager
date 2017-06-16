using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ListingManager.Api.Models
{
    public class OpenHouseDTO
    {
        public int OpenHouseId { get; set; }
        public DateTime OpenHouseBeginDate { get; set; }
        public DateTime OpenHouseEndDate { get; set; }
        public int ListingId { get; set; }
        public string ListingName { get; set; }
    }
}