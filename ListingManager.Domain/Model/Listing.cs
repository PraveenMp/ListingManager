using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ListingManager.Domain.Model
{
    public class Listing
    {
        public int ListingId { get; set; }
        public string ListingName { get; set; }
        public string ListingAddress { get; set; }
        public int AgentId { get; set; }
        public virtual Agent Agent { get; set; }
        
        public virtual ICollection<OpenHouse> OpenHouses { get; set; }
    }
}
