using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ListingManager.Domain.Model
{
    public class Agent
    {
        public int AgentId { get; set; }
        public string AgentName { get; set; }
        public virtual ICollection<Listing> Listings { get; set; }
    }
}
