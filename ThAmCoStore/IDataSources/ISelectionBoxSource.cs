using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
namespace IDataSources
{
    public interface ISelectionBoxSource
    {
        List<Box> getAll();

        Box getByID(int ID);

        Box createNewBox(Box newBox, string User);

        Box updateBox(int ID, Box box, string User);

        void deleteBox(int ID);
    }
}
