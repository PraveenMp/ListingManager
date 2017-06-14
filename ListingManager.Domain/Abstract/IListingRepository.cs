using ListingManager.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ListingManager.Domain.Abstract
{
    public interface IListingRepository : IDisposable
    {
        IEnumerable<Listing> GetListings();
        Listing GetListingByID(int listingId);
        void InsertListing(Listing listing);
        void DeleteListing(int listingId);
        void UpdateListing(Listing listing);
        void Save();
    }
}
