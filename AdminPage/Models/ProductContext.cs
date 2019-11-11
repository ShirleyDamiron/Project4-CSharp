using System;
using Microsoft.EntityFrameworkCore;

namespace AdminPage.Models
{
    public class ProductContext:DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }
        public DbSet<Product> Product { get; set; }
    }
}
