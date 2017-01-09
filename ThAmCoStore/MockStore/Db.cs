using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOs;

namespace MockStore
{
    public sealed class Db
    {
        private static Db instance = new Db();
        public  List<Box> Boxes = new List<Box>();
        public  List<Product> Products = new List<Product>();
        public List<User> Users = new List<User>();
        public List<Wrapping> Wrappings = new List<Wrapping>();
        public List<Box> getBoxes()
        {
            return Boxes;
        }

        private Db()
        {
            createProducts();
            createBoxes();
            createUsers();
            createWrappings();
        }

        public static Db Instance
        {
            get
            {
                return instance;
            }
        }

        private void createWrappings()
        {
            Wrappings.Add(new Wrapping(1, 1, "type1", 1, "range1", 2.00m, 5.2m));
            Wrappings.Add(new Wrapping(2, 1, "type2", 2, "range2", 3.00m, 7.00m));
            Wrappings.Add(new Wrapping(3, 2, "type3", 1, "range1", 1.50m, 3.00m));
        }

        private void createUsers()
        {
            Users.Add(new User(1, "Matthew", "L1426439@live.tees.ac.uk"));
        }

        private void createProducts()
        {
            Products.Add(new Product(1, "randomEAN", 1, "Category 1", 1, "Brand1", "Item 1", "Description", 0.99m, true, null, "undercutters"));
            Products.Add(new Product(2, "randomEAN", 1, "Category 1", 1, "Brand1", "Item 2", "Description", 0.99m, true, null, "dodgy dealers"));
            Products.Add(new Product(3, "randomEAN", 1, "Category 1", 1, "Brand1", "Item 3", "Description", 0.99m, true, null, "bazzas bazaar"));
            Products.Add(new Product(4, "randomEAN", 1, "Category 1", 1, "Brand1", "Item 4", "Description", 0.99m, true, null, "undercutters"));
        }

        private void createBoxes()
        {
            Box b = new Box(1, "test 1", 5.99, "Description", false, true);
            Box b2 = new Box(2, "test 2", 3.99, "Description", true, false);
            Box b3 = new Box(3, "test 3", 9.99, "Description", true, true);
            Box b4 = new Box(4, "test 4", 7.99, "Description", true, true);

            b.Contents = Products;
            b2.Contents = Products;
            b3.Contents = Products;
            b4.Contents = Products;

            Boxes.Add(b);
            Boxes.Add(b2);
            Boxes.Add(b3);
            Boxes.Add(b4);
        }
    }
}
