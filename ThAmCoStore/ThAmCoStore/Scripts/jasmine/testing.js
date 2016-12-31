var IndexViewModel, DetailsViewModel, CartViewModel, CreateViewModel;
$(function () {
    var length;

    afterAll(function () {
        //IndexViewModel = null;
        //ViewModel = null;
        //DetailsViewModel = null;
        //CartViewModel = null;
        DetailsViewModel = new Thamco.ViewModel.Details();
        DetailsViewModel.GetBoxDetails(1, BoxSuccess);

        function BoxSuccess(data, status, jqxhr) {
            DetailsViewModel.getBoxDetailsSuccess(data, status, jqxhr);
            DetailsViewModel.SelectedBox().Price(5.99);
            DetailsViewModel.postChanges(changeSuccess);

            function changeSuccess() {

            }
        }

        Thamco.Controller.Box.RemoveBox({
            success: DeleteSuccess,
            ID: 5
        });

        function DeleteSuccess() {

        }
    });
    describe('Index tests', function () {

        beforeAll(function (done) {
            IndexViewModel = new Thamco.ViewModel.Index();
            Thamco.Controller.Box.Get({
                success: function (data, status, jqxhr) {
                    IndexViewModel.GetBoxSuccess(data, status, jqxhr);
                    done();
                }
            })
        });

        it("should get all boxes that are available to purchase", function (done) {
            expect(IndexViewModel.Boxes().length).toEqual(4);
            done();

        });

        it("should only show boxes that are visible, when staff arent logged in", function (done) {
            IndexViewModel.LoggedIn(false);
            expect(IndexViewModel.filteredBoxes().length).toEqual(3);
            done();
        });

        it("should allow staff to see hidden boxes", function (done) {
            IndexViewModel.LoggedIn(true).showHidden(true);
            expect(IndexViewModel.filteredBoxes().length).toEqual(4);
            done();
        });

        it("should allow searchig of boxes by name", function(done) {
            IndexViewModel.filter('test 1');
            expect(IndexViewModel.filteredBoxes().length).toEqual(1);
            IndexViewModel.filter('');
            done();
        });

        it("should show nothing when searching for a box that doesnt exist", function (done) {
            IndexViewModel.filter('text box');
            expect(IndexViewModel.filteredBoxes().length).toEqual(0);
            IndexViewModel.filter('');
            done();
        });

        it("should allow searching on only min price", function (done) {
            IndexViewModel.minPrice('9');
            expect(IndexViewModel.filteredBoxes().length).toEqual(1);
            IndexViewModel.minPrice('');
            done();
        });

        it("should allow searching on only max price", function (done) {
            IndexViewModel.maxPrice('4');
            expect(IndexViewModel.filteredBoxes().length).toEqual(1);
            IndexViewModel.maxPrice('');
            done();
        });

        it("should allow boxes to be filtered by min-max price", function (done) {
            IndexViewModel.minPrice("5");
            IndexViewModel.maxPrice("8");
            expect(IndexViewModel.filteredBoxes().length).toEqual(2);
            done();
        })
    });

    describe("Create Box page tests", function () {
        beforeAll(function (done) {
            CreateViewModel = new Thamco.ViewModel.Create();

            CreateViewModel.getItems(function (data, status, jqxhr) {
                CreateViewModel.getItemsSuccess(data, status, jqxhr);
                done();
            });
        });

        it("should get all items available", function (done) {
            expect(CreateViewModel.Items().length).toEqual(4);
            done();
        });
    });

    //describe("Creating a valid box", function () {
    //    var result;
    //    beforeAll(function (done) {
    //        CreateViewModel.Description("test description");
    //        CreateViewModel.Name("test name");
    //        CreateViewModel.Price("8.99");
    //        CreateViewModel.SelectedItems().push(CreateViewModel.Items()[0]);
    //        result = CreateViewModel.saveBox(true);
    //        done();
    //    });

    //    it("should fail", function (done) {
    //        expect(result).toBeFalsy();
    //        done();
    //    });
    //});

    describe("Creating invalid box", function () {
        it("should fail to create a box with no name, description, price or items", function () {
            var result;
            result = CreateViewModel.ValidatePage();
            expect(result).toBeFalsy();
        });

        it("should fail to create a box with no description, price or items", function () {
            var result;
            CreateViewModel.Name("test name");
            result = CreateViewModel.ValidatePage();
            expect(result).toBeFalsy();
        });

        it("should fail to create a box with no name, price or items", function () {
            var result;
            CreateViewModel.Description("test description");
            result = CreateViewModel.ValidatePage();
            expect(result).toBeFalsy();
        });

        it("should fail to create a box with no items", function () {
            var result;

            CreateViewModel.Description("test description");
            CreateViewModel.Name("test name");
            CreateViewModel.Price("7.99");
            result = CreateViewModel.ValidatePage();
            expect(result).toBeFalsy();
        });

        it("should fail to create a box with price under 5", function () {
            CreateViewModel.Description("test description");
            CreateViewModel.Name("test name");
            CreateViewModel.Price("3.99");
            CreateViewModel.SelectedItems().push(CreateViewModel.Items()[0]);
            result = CreateViewModel.ValidatePage();
            expect(result).toBeFalsy();
        });

        it("should fail to create a box with price over 25", function () {
            var result;
            CreateViewModel.Description("test description");
            CreateViewModel.Name("test name");
            CreateViewModel.Price("30.99");
            CreateViewModel.SelectedItems().push(CreateViewModel.Items()[0]);
            result = CreateViewModel.ValidatePage();
        });
    })

    describe("Box detail tests", function () {
        beforeAll(function (done) {
            DetailsViewModel = new Thamco.ViewModel.Details();
            Thamco.Controller.Box.GetByID({
                ID: 1,
                success: function (data, status, jqxhr) {
                    DetailsViewModel.getBoxDetailsSuccess(data, status, jqxhr);
                    done();
                }
            })
        });

        it("should get a box with the given ID", function (done) {
            expect(DetailsViewModel.SelectedBox().ID()).toEqual(1);
            done();
        });

        it("should add the selected box to a cookie", function (done) {
            user = $('#user').text();
            if (user.length <= 0) {
                alert("must be logged in for cookie test to pass");
            }
            var cookie = Cookies.get(user);
            if (typeof cookie !== 'undefined') {
                Cookies.remove(user) //clearing any previous cookies
            }
            DetailsViewModel.AddToCart();
            cookie = Cookies.get(user);
            expect(cookie.length).toBeGreaterThan(0);
            done();
        });

        it("should add the items for the box to a cookie", function (done) {
            user = $('#user').text();
            if (user.length <= 0) {
                alert("must be logged in for cookie test to pass");
            }
            var cookie = Cookies.get(user + "items");
            if (typeof cookie !== 'undefined') {
                Cookies.remove(user) //clearing any previous cookies
            }
            DetailsViewModel.AddToCart();
            cookie = Cookies.get(user + "items");
            expect(cookie.length).toBeGreaterThan(0);
            done();
        });

        it("should toggle edit mode", function (done) {
            DetailsViewModel.EditMode(false);
            DetailsViewModel.toggleEdit();
            expect(DetailsViewModel.EditMode()).toBeTruthy();
            done();
        });
    });

    describe("Editing of a Boxes prices", function () {
        beforeAll(function (done) {
            DetailsViewModel.SelectedBox().Price(2.50);
            DetailsViewModel.postChanges(success);
            function success() {
                DetailsViewModel.GetBoxDetails(DetailsViewModel.SelectedBox().ID(), boxSuccess);
                function boxSuccess(data, status, jqxhr) {
                    DetailsViewModel.getBoxDetailsSuccess(data, status, jqxhr);
                    done();
                }
            }
        });

        it("should get the new price of box", function () {
            expect(DetailsViewModel.SelectedBox().Price()).toEqual(2.50);
        });
    })

    describe("Products for Boxes", function () {
        beforeAll(function (done) {
            Thamco.Controller.Item.GetForBox({
                ID: 1,
                success: function (data, status, jqxhr) {
                    DetailsViewModel.getItemsForBoxSuccess(data, status, jqxhr);
                    done();
                }
            })
        });

        it("should get the items associated with a box", function (done) {
            expect(DetailsViewModel.Products().length).toEqual(4);
            done();
        });
    });

    //describe("Editing a box", function () {
    //    var result;
    //    beforeAll(function (done) {
    //        var Box = DetailsViewModel.SelectedBox();
    //        Box.Price('5.99');
    //        Thamco.Controller.Box.EditBox({
    //            ID: 1,
    //            data: ko.mapping.toJS(Box),
    //            success: function (data, status, jqxhr) {
    //                result = data;
    //                done();
    //            }
    //        })
    //    });

    //    it("should allow the successful edit of a boxes price", function (done) {
    //        expect(result).toEqual(200);
    //        done();
    //    });
    //});

    describe("Get selected box", function () {
        beforeAll(function (done) {
            CartViewModel = new Thamco.ViewModel.Cart();
            CartViewModel.getCookies(function (data, status, jqxhr) {
                CartViewModel.getBoxSuccess(data, status, jqxhr);
                done();
            });
        });

        it("should get the box selected for purchase", function (done) {
            expect(CartViewModel.BoxOrder.BoxID()).toEqual(1);
            done();
        });
    });

    describe("Cart page tests", function () {
        beforeAll(function (done) {
            Thamco.Controller.Wrapping.Get({
                success: function (data, status, jqxhr) {
                    CartViewModel.getWrappingsSuccess(data, status, jqxhr);
                    done();
                }
            });
        });

        it("should get all available wrappings", function (done) {
            expect(CartViewModel.Wrappings().length).toEqual(3);
            done();
        });

        it("should change total cost when wrapping is changed", function (done) {
            var oldPrice, Wrapping, newPrice;
            debugger;
            oldPrice = CartViewModel.TotalCost();
            Wrapping = new Thamco.Model.Wrapping();
            Wrapping.ID(2);
            Wrapping.Price(3);
            Wrapping.RangeID(2);
            Wrapping.RangeName("range2");
            Wrapping.Size(7);
            Wrapping.TypeID(1);
            Wrapping.TypeName("type2");
            CartViewModel.SelectedWrapping(Wrapping);

            newPrice = CartViewModel.TotalCost();

            expect(newPrice).toBeGreaterThan(oldPrice);
            done();

        });

        it("should not allow purchasing with no recipient or message", function (done) {
            CartViewModel.Recipient("");
            CartViewModel.Message("");

            expect(CartViewModel.Purchase()).toBeFalsy();
            done();
        });

        it("should not allow purchasing with no recipient", function (done) {
            CartViewModel.Recipient("");
            CartViewModel.Message("Test message");

            expect(CartViewModel.Purchase()).toBeFalsy();
            done();
        });

        it("should not allow purchasing with no message", function (done) {
            CartViewModel.Recipient("Test recipient");
            CartViewModel.Message("");

            expect(CartViewModel.Purchase()).toBeFalsy();
            done();
        });

        it("should allow the purchasing of a box with recipient and message", function (done) {
            CartViewModel.Recipient("Test recipient");
            CartViewModel.Message("Test message");

            expect(CartViewModel.Purchase(true)).toBeTruthy();
            done();
        });

        it("should allow the removal of a box from the cart", function (done) {
            CartViewModel.removeItem();

            expect(CartViewModel.Items()).toBeNull();
            done();
        });
    });
});