using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;
using IDataSources;

namespace MockStore
{
    public class ProductSource : IProductSource
    {
        Db db;

        public ProductSource()
        {
            db = Db.Instance;
        }
        public void CreateProduct(Product newProduct)
        {
            throw new NotImplementedException();
        }

        public List<Product> getAll()
        {
            return db.Products;
        }

        public List<Product> getItemsForBox(int BoxID)
        {
            Box box = db.Boxes.Where(b => b.ID == BoxID).FirstOrDefault();
            return box.Contents;
        }

        public Product getByID()
        {
            throw new NotImplementedException();
        }

        public void UpdateProduct(int ID, Product product)
        {
            throw new NotImplementedException();
        }
    }
}
