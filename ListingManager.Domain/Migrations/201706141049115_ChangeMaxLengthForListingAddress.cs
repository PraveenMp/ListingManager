namespace ListingManager.Domain.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeMaxLengthForListingAddress : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Listings", "ListingAddress", c => c.String(maxLength: 1000));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Listings", "ListingAddress", c => c.String());
        }
    }
}
