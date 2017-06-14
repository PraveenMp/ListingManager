using ListingManager.Domain.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ListingManager.Domain.Repository
{
    public class ListingManagerContext : DbContext
    {
        public ListingManagerContext() : base("ListingDB")
        {

        }
        public IDbSet<Listing> Listings { get; set; }
        public IDbSet<Agent> Agents { get; set; }
        public IDbSet<OpenHouse> OpenHouses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agent>().Property(x => x.AgentName).HasMaxLength(500).IsRequired();
            modelBuilder.Entity<Listing>().Property(x => x.ListingAddress).HasMaxLength(1000);
            base.OnModelCreating(modelBuilder);
        }

    }
}
