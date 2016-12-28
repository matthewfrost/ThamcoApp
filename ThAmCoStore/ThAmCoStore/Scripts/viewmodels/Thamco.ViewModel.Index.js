var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Index: function () {
            var self = this;

            self.Boxes = ko.observableArray([]);

            self.filter = ko.observable('');
            self.minPrice = ko.observable("");
            self.maxPrice = ko.observable("");
            self.LoggedIn = ko.observable(null);
            self.showHidden = ko.observable(true);
            self.VisibleBoxes = ko.pureComputed(function () {
                return self.Boxes().filter(function (item) { return item.Visible() == true });
            });

            self.getLoggedInUser = function () {
                var Email;

                Email = $('#user').html();
                Thamco.Controller.User.GetByEmail({
                    success: success,
                    Email: Email
                });

                function success(data, status, jqxhr) {
                    self.LoggedIn(data);
                }
            }

            self.searchedBoxes = ko.pureComputed(function () {
                var filter, filterOn;

                filter = self.filter();
                if (self.LoggedIn()) {
                    if (!self.showHidden()) {
                        filterOn = self.VisibleBoxes();
                    }
                    else {
                        filterOn = self.Boxes();
                    }
                }
                else {
                    filterOn = self.VisibleBoxes();
                }
                if (!filter) {
                    return filterOn;
                }
                else {
                    return filterOn.filter(function (item) { return item.Name().toLowerCase().indexOf(filter.toLowerCase()) > -1 });
                }
            });

            self.filteredBoxes = ko.pureComputed(function () {
                var min, max;

                min = self.minPrice();
                max = self.maxPrice();

                if (min == "") {
                    min = 0;
                }
                if (max == "") {
                    max = 999;
                }
                return self.searchedBoxes().filter(function (item) { return item.Price() <= max && item.Price() >= min });
            });

            self.GetBoxes = function (callback) {
                Thamco.Controller.Box.Get({
                    success: callback
                });
            }

            self.GetBoxSuccess = function (data, status, jqxhr) {
                var Box;
                debugger;
                for (var i = 0; i < data.length; i++) {
                    Box = new Thamco.Model.SelectionBox();
                    Box.ID(data[i].ID);
                    Box.Name(data[i].Name);
                    Box.Description(data[i].Description);
                    Box.Price(data[i].Price);
                    Box.Visible(data[i].Visible);
                    Box.Available(data[i].Available);
                    self.Boxes.push(Box);
                }
            }

            self.boxDetails = function (item, event) {
                window.open("/Details/Index?ID=" + item.ID(), "_self");
            }
        }
    }
});