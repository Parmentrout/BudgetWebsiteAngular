using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using AngularJsAuthentication.Models;
using AngularJsAuthentication.Repository.Models;
using AngularJsAuthentication.Repository.Repository;

namespace AngularJsAuthentication.Controllers
{
    [RoutePrefix("api/expenses")]
    public class ExpensesController : ApiController
    {
        ExpenseRepository _repository = new ExpenseRepository();

        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            var results = _repository.All().Where(x => x.TemplateId == null).ToList();

            return Ok(results);
        }

        [HttpPost]
        [Route("PostExpense")]
        public async Task<IHttpActionResult> PostExpense(Expense parameter)
        {
            parameter.ModifiedDate = DateTime.Now;
            await _repository.Add(parameter);

            return Ok(parameter);
        }

        [HttpPost]
        [Route("DeleteExpense")]
        public async Task<IHttpActionResult> DeleteExpense(Expense parameter)
        {
            await _repository.DeleteAsync(parameter.Id);
            return Ok();
        }

        [HttpPost]
        [Route("UpdateExpense")]
        public async Task<IHttpActionResult> UpdateExpense(Expense parameter)
        {
            await _repository.UpdateAsync(parameter);
            return Ok();
        }

        [HttpPost]
        [Route("SaveTemplate")]
        public async Task<IHttpActionResult> SaveTemplate(List<Expense> parameter)
        {
             await _repository.SaveTemplate(parameter);
            return Ok();
        }

        [HttpPost]
        [Route("GetTemplate")]
        public IHttpActionResult GetTemplate(object parameter)
        {
            int id = Convert.ToInt32(parameter);
            var templateData = _repository.GetTemplate(id);
            return Ok(templateData);
        }

    }
}

