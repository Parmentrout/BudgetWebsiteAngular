using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJsAuthentication.Repository.Models
{
    public interface IBudgetContext : IDisposable
    {
        DbSet<Expense> Expenses { get; set; }
        Task<int> SaveChangesAsync();
    }
}
