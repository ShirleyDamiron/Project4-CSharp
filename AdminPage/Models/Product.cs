using System;
namespace AdminPage.Models
{
    public class Product
    {
       public int Id { get; set; }
       public string Product_Name { get; set; }
       public string Category { get; set; }
       public string Sizes { get; set; }
       public string Material { get; set; }
       public string Color { get; set; }
       public int Quantity { get; set; }
       public string IMG_SRC { get; set; }
    }
}
