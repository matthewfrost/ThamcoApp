using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
using IDataSources;
namespace MockStore
{
    public class DodgyDealersOrders: IDodgyDealersOrders
    {
        public bool submitOrder(Order order)
        {
            if (order != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
