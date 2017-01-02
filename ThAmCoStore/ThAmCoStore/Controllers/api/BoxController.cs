using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MockStore;
using ThAmCoStore.DTOs;
using DTOs;
using IDataSources;
using Newtonsoft.Json;
namespace ThAmCoStore.Controllers.api
{
    public class BoxController : ApiController
    {
        ISelectionBoxSource source;

        public BoxController(ISelectionBoxSource source)
        {
            this.source = source;
        }
        //GET api/<controller>
        public List<Box> Get()
        {
            return source.getAll();
        }

        public Box Get(int ID)
        {
            return source.getByID(ID);
        }

        // PUT api/<controller>
        public HttpStatusCode Put([FromBody]Box value)
        {
            if(source.createNewBox(value, User.Identity.Name) != null)
            {
                return HttpStatusCode.OK;
            }
            else
            {
                return HttpStatusCode.BadRequest;
            }
        }

        // POST api/<controller>/5
        public HttpStatusCode Post(int id, [FromBody]Box value)
        {
            if (source.updateBox(id, value, User.Identity.Name) != null)
            {
                return HttpStatusCode.OK;
            }
            else
            {
                return HttpStatusCode.BadRequest;
            }
        }

        // DELETE api/<controller>/5
        public void Delete([FromBody]int id)
        {
            source.deleteBox(id);
        }
    }
}