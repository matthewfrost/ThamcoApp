var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Order: function () {
            var self = this;

            self.Name = ko.observable(null);
            self.CardNumber = ko.observable(null);
            self.SecurityNumber = ko.observable(null);
            self.User = ko.observable(null);
            self.ItemOrder = ko.observableArray([]);
            self.WrappingOrder = ko.observableArray([]);
            self.BoxOrder = ko.observableArray([]);

            self.ValidateForm = function () {
                debugger;
                var items, order, current;

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
                    order.Id(0);
                    order.Supplier(current.Supplier());
                    order.TotalPrice(10);
                    order.When(new Date());
                    items.push(order);
                }
                self.submitOrder(self.ItemSuccess, items);
            }

            self.submitOrder = function (callback, data) {
                debugger;
                Thamco.Controller.Order.submitOrder({
                    data: ko.mapping.toJS(data),
                    success: callback
                });
            }
            self.ItemSuccess = function (data, status, jqxhr) {
                debugger;
            }

            self.Init = function () {
                var Items, Wrapping, Box;

                self.User($('#user').text());
                Items = Cookies.get(self.User() + "items");
                Wrapping = Cookies.get(self.User() + "wrapping");
                Box = Cookies.get(self.User());
                debugger;
                self.ItemOrder = ko.mapping.fromJS(JSON.parse(Items));
                //self.WrappingOrder = ko.mapping.fromJS(JSON.parse(Wrapping));
                //self.BoxOrder = ko.mapping.fromJS(JSON.parse(Box));
                debugger;
            }
        }
    }
});