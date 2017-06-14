namespace ListingManager.Domain.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FirstCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Agents",
                c => new
                    {
                        AgentId = c.Int(nullable: false, identity: true),
                        AgentName = c.String(nullable: false, maxLength: 500),
                    })
                .PrimaryKey(t => t.AgentId);
            
            CreateTable(
                "dbo.Listings",
                c => new
                    {
                        ListingId = c.Int(nullable: false, identity: true),
                        ListingName = c.String(),
                        ListingAddress = c.String(),
                        AgentId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ListingId)
                .ForeignKey("dbo.Agents", t => t.AgentId, cascadeDelete: true)
                .Index(t => t.AgentId);
            
            CreateTable(
                "dbo.OpenHouses",
                c => new
                    {
                        OpenHouseId = c.Int(nullable: false, identity: true),
                        OpenHouseBeginDate = c.DateTime(nullable: false),
                        OpenHouseEndDate = c.DateTime(nullable: false),
                        ListingId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.OpenHouseId)
                .ForeignKey("dbo.Listings", t => t.ListingId, cascadeDelete: true)
                .Index(t => t.ListingId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.OpenHouses", "ListingId", "dbo.Listings");
            DropForeignKey("dbo.Listings", "AgentId", "dbo.Agents");
            DropIndex("dbo.OpenHouses", new[] { "ListingId" });
            DropIndex("dbo.Listings", new[] { "AgentId" });
            DropTable("dbo.OpenHouses");
            DropTable("dbo.Listings");
            DropTable("dbo.Agents");
        }
    }
}
