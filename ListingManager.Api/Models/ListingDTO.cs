using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ListingManager.Api.Models
{
    public class ListingDTO
    {
        public int ListingId { get; set; }
        public string ListingName { get; set; }
        public string ListingAddress { get; set; }
        public int AgentId { get; set; }
        public string AgentName { get; set; }
    }
}