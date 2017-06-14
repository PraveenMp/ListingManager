using ListingManager.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ListingManager.Domain.Abstract
{
    public interface IOpenHouseRepository:IDisposable
    {
        IEnumerable<OpenHouse> GetOpenHouseList();
        OpenHouse GetOpenHouseByID(int openHouseId);
        void InsertOpenHouse(OpenHouse openHouse);
        void DeleteOpenHouse(int openHouseId);
        void UpdateOpenHouse(OpenHouse openHouse);
        void Save();
    }
}
