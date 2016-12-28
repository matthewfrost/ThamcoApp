using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
namespace IDataSources
{
    public interface ISelectionBoxOrders
    {
        bool submitOrder(BoxOrder order);
    }
}
