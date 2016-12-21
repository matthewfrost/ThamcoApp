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
    public class ItemController : ApiController
    {
        IProductSource source;

        public ItemController(IProductSource source)
        {
            this.source = source;
        }
        public List<Product> Get()
        {
            return source.getAll();
        }

        public List<Product> GetByBoxID(int BoxID)
        {
            return source.getItemsForBox(BoxID);
        }
    }
}
