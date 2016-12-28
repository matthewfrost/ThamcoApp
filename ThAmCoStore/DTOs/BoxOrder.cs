using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class BoxOrder
    {
        public int? ID { get; set; }
        public string AccountName { get; set; }
        public string CardNumber { get; set; }
        public int BoxID { get; set; }
        public string Recipient { get; set; }
        public string Message { get; set; }
        public decimal Total { get; set; }

        public BoxOrder(string AccountName, int BoxID, string CardNumber, string Recipient, string Message, decimal Total)
        {
            this.AccountName = AccountName;
            this.CardNumber = CardNumber;
            this.BoxID = BoxID;
            this.Recipient = Recipient;
            this.Message = Message;
            this.Total = Total;
        }
    }
}
