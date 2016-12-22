using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDataSources;
using DTOs;
namespace MockStore
{
    public class OrderSource: IOrderSource
    {
        public bool submitOrder(Order order)
        {
            if(order != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool submitOrder(List<Order> orders)
        {
            bool valid = true;
            foreach(Order o in orders)
            {
                if(o == null)
                {
                    valid = false;
                }
            }
            return valid;
        }
    }
}
