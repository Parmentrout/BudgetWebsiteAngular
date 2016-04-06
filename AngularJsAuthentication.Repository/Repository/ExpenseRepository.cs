using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AngularJsAuthentication.Repository.Models;

namespace AngularJsAuthentication.Repository.Repository
{
    public class ExpenseRepository
    {
        readonly IBudgetContext _context = new BudgetContext();
        public async Task Add(Expense entity)
        {
            _context.Expenses.Add(entity);
            await _context.SaveChangesAsync();
        }

        public IQueryable<Expense> All()
        {
            return _context.Expenses;
        }

        public async Task<Expense> FindAsync(long id)
        {
            return await _context.Expenses.FindAsync(id);
        }

        public async Task DeleteAsync(long id)
        {
            Expense model = _context.Expenses.Find(id);
            _context.Expenses.Remove(model);

            await _context.SaveChangesAsync();
        }
    }
}
