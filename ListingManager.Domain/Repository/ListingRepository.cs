using ListingManager.Domain.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using ListingManager.Domain.Model;
using System.Data.Entity;

namespace ListingManager.Domain.Repository
{
    public class ListingRepository : IListingRepository
    {
        private ListingManagerContext listingContext;

        public ListingRepository(ListingManagerContext context)
        {
            this.listingContext = context;
        }
        public Listing GetListingByID(int listingId)
        {
            return listingContext.Listings.Find(listingId);
        }

        public IEnumerable<Listing> GetListings()
        {
            return listingContext.Listings.ToList();
        }

        public void InsertListing(Listing listing)
        {
             listingContext.Listings.Add(listing);
        }
        public void UpdateListing(Listing listing)
        {
            listingContext.Entry(listing).State = EntityState.Modified;
        }
        public void DeleteListing(int listingId)
        {
            Listing listing = listingContext.Listings.Find(listingId);
            listingContext.Listings.Remove(listing);
        }
           public void Save()
        {
            listingContext.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    listingContext.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
