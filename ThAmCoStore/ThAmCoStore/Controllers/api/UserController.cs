using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MockStore;
using DTOs;
using IDataSources;
namespace ThAmCoStore.Controllers.api
{
    public class UserController : ApiController
    {
        IUserSource source;
        public UserController(IUserSource source)
        {
            this.source = source;
        }
        // GET api/<controller>
        public static bool Get()
        {
            throw new NotImplementedException();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        public bool Get([FromUri]string Email)
        {
            User user;
            //string email = System.Web.HttpContext.Current.User.Identity.Name;
            user = source.getByEmail(Email);
            if (user == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}