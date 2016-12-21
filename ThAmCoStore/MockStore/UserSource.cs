using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
using IDataSources;
namespace MockStore
{
    public class UserSource : IUserSource
    {
        Db db;
        public UserSource()
        {
            db = Db.Instance;
        }
        public void createNewUser(User newUser)
        {
            throw new NotImplementedException();
        }

        public List<User> getAll()
        {
            return db.Users;
        }

        public User getByEmail(string Email)
        {
            return db.Users.Where(u => u.Email == Email).FirstOrDefault();
        }

        public User getByID(int ID)
        {
            return db.Users.Where(u => u.ID == ID).FirstOrDefault();
        }

        public void updateUser(int ID, User user)
        {
            throw new NotImplementedException();
        }
    }
}
