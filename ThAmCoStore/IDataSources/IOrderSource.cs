using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
namespace IDataSources
{
    public interface IOrderSource
    {
        bool submitOrder(Order order);
        bool submitOrder(List<Order> orders);
    }
}
