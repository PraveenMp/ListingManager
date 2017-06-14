using ListingManager.Api.Models;
using ListingManager.Domain.Abstract;
using ListingManager.Domain.Model;
using ListingManager.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace ListingManager.Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ListingController : ApiController
    {
        private IListingRepository listingRespository;
        public ListingController()
        {
            this.listingRespository = new ListingRepository(new ListingManagerContext());
        }
        [HttpGet]
        [Route("listing")]
        [ResponseType(typeof(IEnumerable<ListingDTO>))]
        public IHttpActionResult Get()
        {
            using (listingRespository)
            {
                var listing = listingRespository.GetListings();

                var listingDTO = listing.Select(list => new ListingDTO
                {
                    ListingId = list.ListingId,
                    ListingAddress= list.ListingAddress,
                    ListingName=list.ListingName,
                    AgentId=list.AgentId,
                    AgentName=list.Agent.AgentName              
                }).ToList();
                
                return Json<IEnumerable<ListingDTO>>(listingDTO);
            }
        }
    }
}
