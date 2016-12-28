using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDataSources;
using DTOs;
namespace MockStore
{
    public class SelectionBoxOrders: ISelectionBoxOrders
    {
        public bool submitOrder(BoxOrder order)
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
    }
}
