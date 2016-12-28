using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IDataSources;
using DTOs;

namespace ThAmCoStore.Controllers.api
{
    public class BoxOrderController : ApiController
    {
        ISelectionBoxOrders orderSource;

        public BoxOrderController(ISelectionBoxOrders source)
        {
            orderSource = source;
        }
        // GET: api/BoxOrder
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/BoxOrder/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/BoxOrder
        public bool Post([FromBody] BoxOrder order)
        {
            return orderSource.submitOrder(order);
        }

        // PUT: api/BoxOrder/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/BoxOrder/5
        //public void Delete(int id)
        //{
        //}
    }
}
