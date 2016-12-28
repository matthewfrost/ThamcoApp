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
    public class WrappingController : ApiController
    {
        IWrappingSource source;
        IKhansKwikimartOrders orderSource;

        public WrappingController(IWrappingSource source, IKhansKwikimartOrders orderSource)
        {
            this.source = source;
            this.orderSource = orderSource;
        }

        // GET: api/Wrapping
        public List<Wrapping> Get()
        {
            return source.getAll();
        }

        // GET: api/Wrapping/5
        public Wrapping Get(int id)
        {
            return source.getByID(id);
        }

        // POST: api/Wrapping
        public bool Post([FromBody]WrappingOrder order)
        {
            return orderSource.submitOrder(order);
        }

        // PUT: api/Wrapping/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Wrapping/5
        public void Delete(int id)
        {
        }
    }
}
