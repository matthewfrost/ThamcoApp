using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ThAmCoStore.DTOs
{
    public class SelectionBox
    {
        public int? ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public List<Item> Contents { get; set; }
        //public bool InStock { get; set; }
        //public bool Visible { get; set; }

    }
}