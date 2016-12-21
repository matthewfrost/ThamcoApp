var IndexViewModel, DetailsViewModel, CartViewModel;
$(function () {
    var length;

    afterAll(function () {
        //IndexViewModel = null;
        //ViewModel = null;
        //DetailsViewModel = null;
        //CartViewModel = null;
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

        it("should allow boxes to be filtered by min-max price", function (done) {
            IndexViewModel.minPrice("5");
            IndexViewModel.maxPrice("8");
            expect(IndexViewModel.filteredBoxes().length).toEqual(2);
            done();
        })
    });

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

        it("should toggle edit mode", function (done) {
            DetailsViewModel.EditMode(false);
            DetailsViewModel.toggleEdit();
            expect(DetailsViewModel.EditMode()).toBeTruthy();
            done();
        });
    });

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

    describe("Editing a box", function () {
        var result;
        beforeAll(function (done) {
            var Box = DetailsViewModel.SelectedBox();
            Box.Price('5.99');
            Thamco.Controller.Box.EditBox({
                ID: 1,
                data: ko.mapping.toJS(Box),
                success: function (data, status, jqxhr) {
                    result = data;
                    done();
                }
            })
        });

        it("should allow the successful edit of a boxes price", function (done) {
            expect(result).toEqual(200);
            done();
        });
    });

    describe("Cart page tests", function () {
        beforeAll(function (done) {
            CartViewModel = new Thamco.ViewModel.Cart();
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
    });
});