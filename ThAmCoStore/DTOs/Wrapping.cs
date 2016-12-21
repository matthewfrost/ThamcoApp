using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class Wrapping
    {
        public int ID { get; set; }
        public int TypeID { get; set; }
        public string TypeName { get; set; }
        public int RangeID { get; set; }
        public string RangeName { get; set; }
        public decimal Price { get; set; }
        public decimal Size { get; set; }

        public Wrapping(int ID, int TypeID, string TypeName, int RangeID, string RangeName, decimal Price, decimal Size)
        {
            this.ID = ID;
            this.TypeID = TypeID;
            this.TypeName = TypeName;
            this.RangeID = RangeID;
            this.RangeName = RangeName;
            this.Price = Price;
            this.Size = Size;
        }
    }
}
