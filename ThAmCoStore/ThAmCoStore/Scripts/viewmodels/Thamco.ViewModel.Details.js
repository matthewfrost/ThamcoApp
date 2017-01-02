var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Details: function () {
            var self;

            self = this;

            self.SelectedBox = ko.observable(null);
            self.Products = ko.observableArray([]);
            self.LoggedIn = ko.observable(null);

            self.EditMode = ko.observable(false);
            self.Init = function () {
                var url, items = [], item;

                url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for (var i = 0; i < url.length; i++) {
                    item = url[i].split('=');
                    items.push(item[0]);
                    items[item[0]] = item[1];
                }

                self.GetBoxDetails(items.ID, self.getBoxDetailsSuccess);
                self.getItemsForBox(items.ID, self.getItemsForBoxSuccess);
            },

            self.GetBoxDetails = function (boxID, callback) {
                Thamco.Controller.Box.GetByID({
                    success: callback,
                    ID: boxID
                });
            },

            self.getItemsForBox = function (boxID, callback) {
                Thamco.Controller.Item.GetForBox({
                    success: callback,
                    ID: boxID
                });
            },

            self.getBoxDetailsSuccess = function (data, status, jqxhr) {
                var SelectionBox = new Thamco.Model.SelectionBox();
                SelectionBox.ID(data.ID);
                SelectionBox.Name(data.Name);
                SelectionBox.Description(data.Description);
                SelectionBox.Price(data.Price);
                SelectionBox.Visible(data.Visible);
                SelectionBox.Available(data.Available)
                self.SelectedBox(SelectionBox);
            },

            self.getItemsForBoxSuccess = function (data, status, jqxhr) {
                var item, c;
                debugger;
                for (var i = 0; i < data.length; i++) {
                    item = new Thamco.Model.Item();

                    c = data[i]
                    item.ID(c.Id);
                    item.Name(c.Name);
                    item.EAN(c.Ean);
                    item.Category(c.Category);
                    item.CategoryID(c.CategoryID);
                    item.BrandID(c.BrandID);
                    item.Brand(c.Brand);
                    item.Description(c.Description);
                    item.Price(c.Price);
                    item.InStock(c.InStock);
                    item.Supplier(c.Supplier);
                    self.Products().push(item);
                }
            }

            self.getLoggedInUser= function () {
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

            self.AddToCart = function () {
                var user, cookie, obj;
                user = $('#user').text();
                cookie = Cookies.get(user);
                if (typeof cookie !== 'undefined') {
                    Cookies.remove(user);
                    
                }
                Cookies.set(user, { itemName: self.SelectedBox().Name(), itemPrice: self.SelectedBox().Price(), itemID: self.SelectedBox().ID() });
                debugger;
                Cookies.set(user + "items", ko.mapping.toJSON(self.Products()));
            }

            self.toggleEdit = function () {
                if (self.EditMode()) {
                    self.EditMode(false);
                }
                else {
                    self.EditMode(true);
                }
            }

            self.postChanges = function (callback) {
                Thamco.Controller.Box.EditBox({
                    success: callback,
                    data: ko.mapping.toJS(self.SelectedBox()),
                    ID: self.SelectedBox().ID()
                });
            }

            self.PostSuccess = function (data, status, jqxhr) {
                if (data == 200) {
                }
                else {
                    alert("Something went wrong");
                }
            }
        }
    }
});