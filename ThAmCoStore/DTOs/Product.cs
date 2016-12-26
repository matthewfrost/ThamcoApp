using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DTOs
{
    public class Product
    {
        public int? Id { get; set; }
        public string Ean { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int BrandId { get; set; }
        public string BrandName { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public bool InStock { get; set; }
        public string Supplier { get; set; }
        public DateTime ExpectedRestock { get; set; }

        public Product(int? ID, string Ean, int CategoryID, string CategoryName, int BrandID, string BrandName, string Name, string Description, decimal Price, bool inStock, DateTime? expectedRestock, string Supplier)
        {
            this.Id = ID;
            this.Ean = Ean;
            this.CategoryId = CategoryId;
            this.CategoryName = CategoryName;
            this.BrandId = BrandId;
            this.BrandName = BrandName;
            this.Name = Name;
            this.Description = Description;
            this.Price = Price;
            this.ExpectedRestock = ExpectedRestock;
            this.InStock = InStock;
            this.Supplier = Supplier;
        }
    }
}
