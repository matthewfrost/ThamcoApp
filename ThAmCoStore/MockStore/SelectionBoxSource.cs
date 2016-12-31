using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using DTOs;
using IDataSources;
namespace MockStore
{
    //Mocking Box Web Service
    public class SelectionBoxSource : ISelectionBoxSource
    {
        Db db;
        public SelectionBoxSource()
        {
            db = Db.Instance;
        }

        public Box createNewBox(Box newBox, string User)
        {
            if (userExists(User)) {
                newBox.ID = db.Boxes.Count + 1;
                db.Boxes.Add(newBox);
                return newBox;
            }else
            {
                return null;
            }
            
        }

        public List<Box> getAll()
        {
            List<Box> tempBox = new List<Box>();
            foreach(Box b in db.Boxes)
            {
                tempBox.Add(new Box(b.ID, b.Name, b.Price, b.Description, b.Visible, b.Available));
            }

            return tempBox;
        }

        public Box getByID(int ID)
        {
            Box Tempbox = db.Boxes.Where(b => b.ID == ID).FirstOrDefault();
            return new Box(Tempbox.ID, Tempbox.Name, Tempbox.Price, Tempbox.Description, Tempbox.Visible, Tempbox.Available);
        }

        public Box updateBox(int ID, Box box, string User)
        {
            if (userExists(User))
            {
                Box toUpdate = db.Boxes.Where(b => b.ID == ID).FirstOrDefault();
                db.Boxes.Remove(toUpdate);
                toUpdate = box;
                db.Boxes.Add(toUpdate);
                return toUpdate;
            }
            else
            {
                return null;
            }
        }

        private bool userExists(string user)
        {
            UserSource u = new UserSource();
            User User = u.getByEmail(user);
            if(User != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void deleteBox(int ID)
        {
            Box Box = db.Boxes.Where(b => b.ID == ID).FirstOrDefault();
            db.Boxes.Remove(Box);
        }
    }
}
