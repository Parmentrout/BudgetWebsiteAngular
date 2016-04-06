using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using AngularJsAuthentication.Repository.Models.Mapping;

namespace AngularJsAuthentication.Repository.Models
{
    public partial class BudgetContext :  DbContext, IBudgetContext
    {
        static BudgetContext()
        {
            Database.SetInitializer<BudgetContext>(null);
        }

        public BudgetContext()
            : base("Name=BudgetContext")
        {
        }

        public DbSet<Expense> Expenses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new ExpensMap());
        }
    }
}
