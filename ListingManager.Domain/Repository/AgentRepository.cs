using ListingManager.Domain.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ListingManager.Domain.Model;
using System.Data.Entity;

namespace ListingManager.Domain.Repository
{
    public class AgentRepository : IAgentRepository
    {

        private ListingManagerContext listingMangerContext;

        public AgentRepository(ListingManagerContext context)
        {
            this.listingMangerContext = context;
        }

        public IEnumerable<Agent> GetAgents()
        {
            return listingMangerContext.Agents.ToList();
        }

        public Agent GetAgentByID(int agentId)
        {
            return listingMangerContext.Agents.Find(agentId);
        }

        public void InsertAgent(Agent agent)
        {
            listingMangerContext.Agents.Add(agent);
        }

        public void DeleteAgent(int agentId)
        {
            Agent agent = listingMangerContext.Agents.Find(agentId);
            listingMangerContext.Agents.Remove(agent);
        }

        public void UpdateAgent(Agent agent)
        {
            listingMangerContext.Entry(agent).State = EntityState.Modified;
        }

        public void Save()
        {
            listingMangerContext.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    listingMangerContext.Dispose();
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
