using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
using IDataSources;
namespace MockStore
{
    public class KhansKwikimartOrders: IKhansKwikimartOrders
    {
        public bool submitOrder(WrappingOrder order)
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
