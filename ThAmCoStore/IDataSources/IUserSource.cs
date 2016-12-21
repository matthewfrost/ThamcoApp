using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
namespace IDataSources
{
    public interface IUserSource
    {
        List<User> getAll();

        User getByID(int ID);

        User getByEmail(string email);
        void createNewUser(User newUser);

        void updateUser(int ID, User user);
        
    }
}
