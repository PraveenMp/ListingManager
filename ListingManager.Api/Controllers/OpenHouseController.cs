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
    /// <summary>
    /// Get the details of OpenHouse controller
    /// </summary>
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class OpenHouseController : ApiController
    {
        private IOpenHouseRepository openHouseRepository;
        public OpenHouseController()
        {
            this.openHouseRepository = new OpenHouseRepository(new ListingManagerContext());
        }

        /// <summary>
        /// Get all the openhouses 
        /// </summary>
        /// <returns>Returns list of listings</returns>
        [HttpGet]
        [Route("openhouse")]
        [ResponseType(typeof(IEnumerable<ListingDTO>))]
        public IHttpActionResult Get()
        {
            using (openHouseRepository)
            {
                var openhouse = openHouseRepository.GetOpenHouseList();

                var openHouseDTO = openhouse.Select(list => new OpenHouseDTO
                {
                    OpenHouseId=list.OpenHouseId,
                    OpenHouseBeginDate=list.OpenHouseBeginDate,
                    OpenHouseEndDate=list.OpenHouseEndDate,
                    ListingId=list.ListingId,
                    ListingName=list.Listing.ListingName
                  
                }).ToList();

                return Json<IEnumerable<OpenHouseDTO>>(openHouseDTO);
            }
        }

        /// <summary>
        /// Add openhouse details to database
        /// </summary>
        /// <param name="openhouse">takes openhouse type as input</param>
        /// <returns>Return HttpResponseMessage Type</returns>
        [HttpPost]
        [Route("openhouse")]
        public HttpResponseMessage Post(OpenHouse openhouse)
        {
            HttpResponseMessage response;
            try
            {
                openHouseRepository.InsertOpenHouse(openhouse);
                openHouseRepository.Save();
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, "Error");
                return response;
            }
            response = Request.CreateResponse(HttpStatusCode.OK, "Success");
            return response;
        }

        /// <summary>
        /// Update openhouse details
        /// </summary>
        /// <param name="openhouse"></param>
        /// <returns>Return HttpResponseMessage Type</returns>
        [HttpPut]
        [Route("openhouse")]
        public HttpResponseMessage Put(OpenHouse openhouse)
        {
            HttpResponseMessage response;
            try
            {
                openHouseRepository.UpdateOpenHouse(openhouse);
                openHouseRepository.Save();
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, "Error");
                return response;
            }
            response = Request.CreateResponse(HttpStatusCode.OK, "Success");
            return response;
        }

        /// <summary>
        /// Delete the openhouse
        /// </summary>
        /// <param name="openHouseId"></param>
        /// <returns>Return HttpResponseMessage Type</returns>
        [HttpDelete]
        [Route("openhouse/{openHouseId}")]
        public HttpResponseMessage Delete(int openHouseId)
        {
            HttpResponseMessage response;
            try
            {
                openHouseRepository.DeleteOpenHouse(openHouseId);
                openHouseRepository.Save();
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, "Error");
                return response;
            }
            response = Request.CreateResponse(HttpStatusCode.OK, "Success");
            return response;
        }
    }
}
