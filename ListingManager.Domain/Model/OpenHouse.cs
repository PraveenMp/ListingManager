using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ListingManager.Domain.Model
{
    public class OpenHouse
    {
        public int OpenHouseId { get; set; }
        public DateTime OpenHouseBeginDate { get; set; }
        public DateTime OpenHouseEndDate { get; set; }
        public int ListingId { get; set; }
        public virtual Listing Listing { get; set; }
    }
}
