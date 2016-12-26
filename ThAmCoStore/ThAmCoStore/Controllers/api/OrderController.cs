using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTOs;
using MockStore;
using IDataSources;
namespace ThAmCoStore.Controllers.api
{
    public class OrderController : ApiController
    {
        IDodgyDealersOrders DodgyDealers;
        IKhansKwikimartOrders KhansKwikimart;
        IUndercutersOrders Undercutters;
        IBazzasBazaarOrders BazzasBazaar;

        // GET: api/Order
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Order/5
        public string Get(int id)
        {
            return "value";
        }

        // PUT: api/Order
        //public bool Put([FromBody]Order order)
        //{
        //    bool result = false;
        //   //return source.submitOrder(order);
        //    switch (order.supplier.ToLower())
        //    {
        //        case "undercutters":
        //            result = Undercutters.submitOrder(order);
        //            break;
        //        case "dodgydealers":
        //            result = DodgyDealers.submitOrder(order);
        //            break;
        //        case "bazzasbazaar":
        //            result = BazzasBazaar.submitOrder(order);
        //            break;
        //    }

        //    return result;
        //}

        public bool Put([FromBody] List<Order> orders)
        {
            bool result = false;
            foreach(Order o in orders)
            {
                switch (o.supplier.ToLower())
                {
                    case "undercutters":
                        result = Undercutters.submitOrder(o);
                        break;
                    case "dodgydealers":
                        result = DodgyDealers.submitOrder(o);
                        break;
                    case "bazzasbazaar":
                        result = BazzasBazaar.submitOrder(o);
                        break;
                }
            }

            return result;
        }

        // POST: api/Order/5
        public void Post(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Order/5
        public void Delete(int id)
        {
        }

        private void checkSupplier(Order order)
        {

        }
    }
}
