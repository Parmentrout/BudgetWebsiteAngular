using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularJsAuthentication.Repository.Models
{
    public partial class Expense
    {
        public Expense()
        {
            ModifiedDateStr = ModifiedDate.ToShortDateString();
        }

        public int Id { get; set; }
        public string Charge { get; set; }
        public decimal Amount { get; set; }
        public string Category { get; set; }
        public System.DateTime ModifiedDate { get; set; }

        [NotMapped]
        public string ModifiedDateStr { get; set; }
    }
}
