using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace AngularJsAuthentication.Repository.Models.Mapping
{
    public class ExpensMap : EntityTypeConfiguration<Expense>
    {
        public ExpensMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.Charge)
                .IsRequired()
                .HasMaxLength(255);

            this.Property(t => t.Category)
                .IsRequired()
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Expenses");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.Charge).HasColumnName("Charge");
            this.Property(t => t.Amount).HasColumnName("Amount");
            this.Property(t => t.Category).HasColumnName("Category");
            this.Property(t => t.ModifiedDate).HasColumnName("ModifiedDate");
            this.Property(t => t.ModifiedDate).HasColumnName("TemplateId");
        }
    }
}
