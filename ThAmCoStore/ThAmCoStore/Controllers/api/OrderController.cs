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
        IOrderSource source;
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

        // POST: api/Order
        public bool Post([FromBody]Order order)
        {
           return source.submitOrder(order);
        }

        public bool Post([FromBody] List<Order> orders)
        {
            return source.submitOrder(orders);
        }

        // PUT: api/Order/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Order/5
        public void Delete(int id)
        {
        }
    }
}
