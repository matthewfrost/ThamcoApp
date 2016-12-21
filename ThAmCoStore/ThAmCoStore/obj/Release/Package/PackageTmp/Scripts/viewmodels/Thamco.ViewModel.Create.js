var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Create: function () {
            var self = this;

            self.Items = ko.observableArray([]);
            self.SelectedItem = ko.observable(null);
            self.SelectedItems = ko.observableArray([]);

            self.getItems = function () {
                Thamco.Controller.Item.Get({
                    success: success
                });

                function success(data, status, jqxhr) {
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
            }

            self.addItem = function () {
                self.SelectedItems.push(self.SelectedItem());
                self.Items.remove(self.SelectedItem());
            }

            self.removeItem = function (item, event) {
                self.Items.push(item);
                self.SelectedItems.remove(item);
            }

            self.saveBox = function () {
                var Box, Name, Description, Price;
                $('.error').removeClass('error')
                Name = $('#boxName').val().trim();
                Description = $('#boxDescription').val().trim();
                Price = $('#boxPrice').val().trim();
                debugger;
                if (Name != "" && Description != "" && Price != "") {
                    Box = new Thamco.Model.SelectionBox();

                    Box.Name(Name);
                    Box.Description(Description);
                    Box.Price(Price);
                    Box.Contents(self.SelectedItems());

                    Thamco.Controller.Box.CreateNewBox({
                        success: success,
                        data: ko.mapping.toJS(Box)
                    });

                    function success(data, status, jqxhr) {
                        window.open(document.domain + "/Home/Index", "_self");
                    }
                }
                else {
                    if (Name == "") {
                        debugger;
                        $('#boxName').addClass('error');
                    }
                    if(Description == "")
                    {
                        debugger;
                        $('#boxDescription').addClass('error');
                    }
                    if (Price == "") {
                        debugger;
                        $('#bocPrice').addClass('error');
                    }
                }
            }
        }
    }
});