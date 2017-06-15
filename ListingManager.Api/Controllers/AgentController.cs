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
    /// Get detsils of Agent
    /// </summary>
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AgentController : ApiController
    {
        private IAgentRepository agentRepository;

        public AgentController()
        {
            this.agentRepository = new AgentRepository(new ListingManagerContext());
        }

        /// <summary>
        /// Method to get all the Agents 
        /// </summary>
        /// <returns>All the agents</returns>
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

        /// <summary>
        /// Add Agent details to database
        /// </summary>
        /// <param name="agent">takes agent type as input</param>
        /// <returns>Return HttpResponseMessage Type</returns>
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
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, "Error");
                return response;
            }
            response = Request.CreateResponse(HttpStatusCode.OK, "Success");
            return response;
        }


        /// <summary>
        /// Update agent details
        /// </summary>
        /// <param name="agent"></param>
        /// <returns>Return HttpResponseMessage Type</returns>
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

        /// <summary>
        /// Delete the agent
        /// </summary>
        /// <param name="agentId"></param>
        /// <returns>Return HttpResponseMessage Type</returns>
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
