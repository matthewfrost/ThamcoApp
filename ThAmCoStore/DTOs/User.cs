using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class User
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public User(int ID, string Name, string Email)
        {
            this.ID = ID;
            this.Name = Name;
            this.Email = Email;
        }
    }
}
