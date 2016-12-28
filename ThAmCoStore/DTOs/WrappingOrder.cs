using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class WrappingOrder
    {
        public int? Id { get; set; }
        public string AccountName { get; set; }
        public string CardNumber { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }

        public WrappingOrder(string AccountName, string CardNumber, int ProductID, int Quantity, decimal TotalPrice)
        {
            this.AccountName = AccountName;
            this.CardNumber = CardNumber;
            this.ProductId = ProductID;
            this.Quantity = Quantity;
            this.TotalPrice = TotalPrice;
        }
    }
}
