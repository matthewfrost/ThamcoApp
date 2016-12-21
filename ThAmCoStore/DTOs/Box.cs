using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DTOs
{
    public class Box
    {
        public int? ID { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public List<Product> Contents { get; set; }
        public bool Visible { get; set; }
        public bool Available { get; set; }

        public Box(int? ID, string Name, double Price, string Description, bool Visible, bool Available)
        {
            this.ID = ID;
            this.Name = Name;
            this.Price = Price;
            this.Description = Description;
            this.Visible = Visible;
            this.Available = Available;
        }
    }
}
