using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AngularJsAuthentication.Repository.Models;

namespace AngularJsAuthentication.Repository.Repository
{
    public class ExpenseRepository : IDisposable
    {
        readonly IBudgetContext _context = new BudgetContext();
        public async Task Add(Expense entity)
        {
            try
            {
                _context.Expenses.Add(entity);
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {

            }
        }

        public IQueryable<Expense> All()
        {
            return _context.Expenses;
        }

        public async Task<Expense> FindAsync(long id)
        {
            return await _context.Expenses.FindAsync(id);
        }

        public async Task<Expense> UpdateAsync(Expense entity)
        {
            var existing = await FindAsync(entity.Id);
            existing.Amount = entity.Amount;
            existing.Charge = entity.Charge;
            existing.Category = entity.Category;

            await _context.SaveChangesAsync();

            return existing;
        }

        public async Task DeleteAsync(long id)
        {
            Expense model = _context.Expenses.Find(id);
            _context.Expenses.Remove(model);

            await _context.SaveChangesAsync();
        }

        public async Task SaveTemplate(List<Expense> template)
        {
            var templateId = template.FirstOrDefault().TemplateId;

            var deletes = _context.Expenses.Where(x => x.TemplateId == templateId);
            foreach (var delete in deletes)
            {
                _context.Expenses.Remove(delete);
            }
            foreach (var row in template)
            {
                row.ModifiedDate = DateTime.Now;
                _context.Expenses.Add(row);
            }

            await _context.SaveChangesAsync();
        }

        public List<Expense> GetTemplate(int templateId)
        {
            return _context.Expenses.Where(x => x.TemplateId == templateId).ToList();
        } 
        
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
