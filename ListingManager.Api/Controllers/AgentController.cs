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
    public class AgentController : ApiController
    {
        private IAgentRepository agentRepository;
        public AgentController()
        {
            this.agentRepository = new AgentRepository(new ListingManagerContext());
        }

        [HttpGet]
        [Route("agent")]
        [ResponseType(typeof(IEnumerable<ListingDTO>))]
        public IHttpActionResult Get()
        {
            using (agentRepository)
            {
                var agentList = agentRepository.GetAgents();

                var agentDTO = agentList.Select(list => new AgentDTO
                {
                    AgentId = list.AgentId,
                    AgentName = list.AgentName
                }).ToList();

                return Json<IEnumerable<AgentDTO>>(agentDTO);
            }
        }

        [HttpPost]
        [Route("agent")]
        public HttpResponseMessage Post(Agent agent)
        {
            HttpResponseMessage response;
            try
            {
                agentRepository.InsertAgent(agent);
                agentRepository.Save();
            }
            catch(Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, "Error");
                return response;
            }
            response = Request.CreateResponse(HttpStatusCode.OK, "Success");
            return response;
        }

        [HttpPut]
        [Route("agent")]
        public HttpResponseMessage Put(Agent agent)
        {
            HttpResponseMessage response;
            try
            {
                agentRepository.UpdateAgent(agent);
                agentRepository.Save();
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, "Error");
                return response;
            }
            response = Request.CreateResponse(HttpStatusCode.OK, "Success");
            return response;
        }

        [HttpDelete]
        [Route("agent/{agentId}")]
        public HttpResponseMessage Delete(int agentId)
        {
            HttpResponseMessage response;
            try
            {
                agentRepository.DeleteAgent(agentId);
                agentRepository.Save();
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
