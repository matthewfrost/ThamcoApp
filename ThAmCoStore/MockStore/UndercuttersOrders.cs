using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDataSources;
using DTOs;
namespace MockStore
{
    public class UndercuttersOrders: IUndercutersOrders
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
