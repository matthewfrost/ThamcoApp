var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Create: function () {
            var self = this;

            self.Name = ko.observable(null);
            self.Price = ko.observable(null);
            self.Description = ko.observable(null);

            self.Items = ko.observableArray([]);
            self.SelectedItem = ko.observable(null);
            self.SelectedItems = ko.observableArray([]);

            self.getItems = function (callback) {
                Thamco.Controller.Item.Get({
                    success: callback
                });
            }

            self.getItemsSuccess = function (data, status, jqxhr) {
                var Item, current;
                for (var i = 0; i < data.length; i++) {
                    Item = new Thamco.Model.Item();
                    current = data[i];
                    Item.ID(current.ID)
                    Item.EAN(current.EAN);
                    Item.Supplier(current.Supplier);
                    Item.CategoryID(current.CategoryID);
                    Item.Category(current.Category);
                    Item.Brand(current.Brand);
                    Item.BrandID(current.BrandID);
                    Item.Name(current.Name);
                    Item.Description(current.Description);
                    Item.Price(current.Price);
                    Item.InStock(current.InStock);
                    Item.ExpectedRestock(current.ExpectedRestock);

                    self.Items.push(Item);
                }
            }

            self.addItem = function () {
                self.SelectedItems.push(self.SelectedItem());
                self.Items.remove(self.SelectedItem());
            }

            self.removeItem = function (item, event) {
                self.Items.push(item);
                self.SelectedItems.remove(item);
            }

            self.saveBox = function (callback) {
                var Box;
                
                if (self.ValidatePage()) {
                    Box = new Thamco.Model.SelectionBox();
                    Box.Name(self.Name());
                    Box.Description(self.Description());
                    Box.Price(self.Price());
                    Box.Contents(self.SelectedItems());
                    Box.Available(true);
                    Box.Visible(true);

                    Thamco.Controller.Box.CreateNewBox({
                        success: callback,
                        data: ko.mapping.toJS(Box)
                    });
                }
            }

            self.saveBoxSuccess = function (data, status, jqxhr, Debug) {
                var Result;
                Debug = Debug || false
                if (data == 200) {
                    if (!Debug) {
                        window.open(document.domain + "/Home/Index", "_self");
                    }
                    Result = true;
                }
                else {
                    //alert("something went wrong");
                    Result = false;
                }
                return Result;

            }

            self.ValidatePage = function () {
                var Name, Description, Price, Result;

                Result = true;
                Name = self.Name();
                Description = self.Description();
                Price = self.Price();
                if (self.SelectedItems() == null || self.SelectedItems().length) {
                    if (Name != null && Description != null && Price != null) {
                        if (Name.trim() == "" || Description.trim() == "" || Price.trim() == "") {
                            Result = false;
                        }
                        else {
                            if (parseFloat(Price) < 5 || parseFloat(Price) > 25) {
                                Result = false;
                            }
                        }
                    }
                    else {
                        Result = false;
                    }
                }
                else {
                    Result = false;
                }

                return Result;
            }
        }
    }
});