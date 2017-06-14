using ListingManager.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ListingManager.Domain.Abstract
{
    public interface IAgentRepository:IDisposable
    {
        IEnumerable<Agent> GetAgents();
        Agent GetAgentByID(int agentId);
        void InsertAgent(Agent agent);
        void DeleteAgent(int agentId);
        void UpdateAgent(Agent agent);
        void Save();
    }
}
