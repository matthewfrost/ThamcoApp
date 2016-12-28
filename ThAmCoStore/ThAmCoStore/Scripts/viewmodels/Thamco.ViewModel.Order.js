var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Order: function () {
            var self = this;

            self.Name = ko.observable(null);
            self.CardNumber = ko.observable(null);
            self.SecurityNumber = ko.observable(null);
            self.User = ko.observable(null);
            self.ItemOrder = ko.observableArray([]);
            self.WrappingOrder = ko.observable(null);
            self.BoxOrder = ko.observableArray([]);
            self.orderSuccess = ko.observable(false);

            self.ValidateForm = function () {
                
                var items, order, current;
                /*
                    Do validation
                */
                items = ko.observableArray([]);
                for (var i = 0; i < self.ItemOrder().length; i++) {
                    current = self.ItemOrder()[i];
                    order = new Thamco.Model.Order();
                    order.AccountName(self.User());
                    order.CardNumber(self.CardNumber());
                    order.ProductId(current.ID());
                    order.Quantity(1);
                    order.ProductName(current.Name());
                    order.ProductEan(current.EAN());
                    order.Supplier(current.Supplier());
                    order.TotalPrice(10);
                    order.When(new Date());
                    items.push(order);
                }
                self.submitItemOrder(self.ItemSuccess, items);
            }

            self.submitItemOrder = function (callback, data) {
                
                Thamco.Controller.Order.submitOrder({
                    data: ko.mapping.toJS(data),
                    success: callback
                });
            }
            self.ItemSuccess = function (data, status, jqxhr) {
                
                if (data) {
                    self.submitWrappingOrder(self.wrappingOrderSuccess);                    
                }
            }

            self.submitWrappingOrder = function (callback) {
                var order = new Thamco.Model.WrappingOrder();
                order.AccountName(self.User());
                order.CardNumber(self.CardNumber());
                order.ProductId(self.WrappingOrder.ID());
                order.Quantity(1);
                order.TotalPrice((self.WrappingOrder.Price()).toFixed(2)); //forcing decimal

                Thamco.Controller.Wrapping.submitOrder({
                    data: ko.mapping.toJS(order),
                    success: callback
                });
            }

            self.wrappingOrderSuccess = function (data, status, jqxhr) {
                debugger;
                if (data == true) {
                    self.submitBoxOrder(self.boxOrderSuccess);
                }
            }

            self.submitBoxOrder = function (callback) {
                debugger;
                self.BoxOrder().CardNumber(self.CardNumber());
                Thamco.Controller.BoxOrder.submitOrder({
                    success: callback,
                    data: ko.mapping.toJS(self.BoxOrder())
                });
            }

            self.boxOrderSuccess = function(data, status, jqxhr){
                if (data == true) {
                    self.orderSuccess(true);
                    Cookies.remove(self.User());
                    Cookies.remove(self.User() + "wrapping");
                    Cookies.remove(self.User() + "items");
                }
            }

            self.Init = function () {
                var Items, Wrapping, Box, boxOrder;

                self.User($('#user').text());
                Items = Cookies.get(self.User() + "items");
                Wrapping = Cookies.get(self.User() + "wrapping");
                Box = JSON.parse(Cookies.get(self.User()));
                
                boxOrder = new Thamco.Model.BoxOrder();
                boxOrder.AccountName(Box.AccountName);
                boxOrder.BoxID(Box.BoxID);
                boxOrder.Recipient(Box.Recipient);
                boxOrder.Message(Box.Message);
                boxOrder.Total(Box.Total);

                self.ItemOrder = ko.mapping.fromJS(JSON.parse(Items));
                self.WrappingOrder = ko.mapping.fromJS(JSON.parse(Wrapping));
                self.BoxOrder(boxOrder);
                
            }
        }
    }
});