using ListingManager.Domain.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using ListingManager.Domain.Model;
using System.Data.Entity;

namespace ListingManager.Domain.Repository
{
    public class OpenHouseRepository : IOpenHouseRepository
    {
        private ListingManagerContext openHouseContext;

        public OpenHouseRepository(ListingManagerContext context)
        {
            this.openHouseContext = context;
        }

        public OpenHouse GetOpenHouseByID(int openHouseId)
        {
            return openHouseContext.OpenHouses.Find(openHouseId);
        }

        public IEnumerable<OpenHouse> GetOpenHouseList()
        {
            return openHouseContext.OpenHouses.ToList();
        }

        public void InsertOpenHouse(OpenHouse openHouse)
        {
            openHouseContext.OpenHouses.Add(openHouse);
        }

        public void UpdateOpenHouse(OpenHouse openHouse)
        {
            openHouseContext.Entry(openHouse).State = EntityState.Modified;
        }

        public void DeleteOpenHouse(int openHouseId)
        {
            OpenHouse openHouse = openHouseContext.OpenHouses.Find(openHouseId);
            openHouseContext.OpenHouses.Remove(openHouse);
        }

        public void Save()
        {
            openHouseContext.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    openHouseContext.Dispose();
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
