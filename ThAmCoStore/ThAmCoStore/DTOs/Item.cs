using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ThAmCoStore.DTOs
{
    public class Item
    {
        public int? ID { get; set; }
        public string EAN { get; set; }
        public string Supplier { get; set; }
        public int CategoryId { get; set; }
        public string Category { get; set; } 
        public int BrandId { get; set; }
        public string Brand { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public bool InStock { get; set; }
        public DateTime ExpectedRestock { get; set; }
    }
}