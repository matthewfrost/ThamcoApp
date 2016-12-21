using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDataSources;
using DTOs;
namespace MockStore
{
    public class WrappingSource: IWrappingSource
    {
        Db db;

        public WrappingSource()
        {
            db = Db.Instance;
        }
        public List<Wrapping> getAll()
        {
            return db.Wrappings;
        }

        public Wrapping getByID(int ID)
        {
            return db.Wrappings.Where(w => w.ID == ID).FirstOrDefault();
        }
    }
}
