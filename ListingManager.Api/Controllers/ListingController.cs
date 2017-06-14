using ListingManager.Domain.Abstract;
using ListingManager.Domain.Model;
using ListingManager.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace ListingManager.Api.Controllers
{
    public class ListingController : ApiController
    {
        private IListingRepository listingRespository;
        public ListingController(/*IListingRepository listingRespository*/)
        {
            this.listingRespository = new ListingRepository(new ListingManagerContext());
        }
        [HttpGet]
        [Route("listing")]
        [ResponseType(typeof(IEnumerable<Listing>))]
        public IHttpActionResult Get()
        {
            using (listingRespository)
            {
                var listing = listingRespository.GetListings();
                return Json<IEnumerable<Listing>>(listing);
            }
        }
    }
}
