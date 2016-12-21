using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;

namespace IDataSources
{
    public interface IProductSource
    {
        List<Product> getAll();

        Product getByID();

        void CreateProduct(Product newProduct);

        void UpdateProduct(int ID, Product product);

        List<Product> getItemsForBox(int BoxID);
    }
}
