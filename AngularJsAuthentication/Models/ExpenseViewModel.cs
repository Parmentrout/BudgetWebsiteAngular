using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJsAuthentication.Models
{
    public class ExpenseViewModel
    {
        public string Charge { get; set; }
        public decimal Amount { get; set; }
        public string Category { get; set; }
        public string ModifiedDate { get; set; }
    }
}