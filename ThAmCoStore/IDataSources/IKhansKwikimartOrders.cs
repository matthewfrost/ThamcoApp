using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
namespace IDataSources
{
    public interface IKhansKwikimartOrders
    {
        bool submitOrder(WrappingOrder order);
    }
}
