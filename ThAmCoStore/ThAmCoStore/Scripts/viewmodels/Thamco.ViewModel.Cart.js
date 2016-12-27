﻿var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Cart: function () {
            var self = this;

            self.User = ko.observable(null);
            self.Items = ko.observable(null);
            self.Wrappings = ko.observableArray([]);
            self.WrappingCost = ko.observable(0);
            self.SelectedWrapping = ko.observable(new Thamco.Model.Wrapping());
            self.TotalCost = ko.pureComputed(function () {
                if (typeof self.SelectedWrapping() != 'undefined') {
                    return parseFloat(self.Items().ItemPrice()) + parseFloat(self.SelectedWrapping().Price());
                }
                else {
                    return 'Select Wrapping Type';
                }
            });
            self.removeItem = function (item, event) {
                var index, cookieObj, user, removedItem;

                self.User( $('#user').text());
                Cookies.remove(self.User());
                self.Items(null);
            }

            self.Purchase = function () {
                Cookies.set(self.User() + "wrapping", ko.mapping.toJSON(self.SelectedWrapping()));
                debugger;
                window.open("/Order/Index", "_self");
            }

            self.getCookies= function () {
                var cookie, current, cartOrder;

                self.User($('#user').text());
                cookie = JSON.parse(Cookies.get(self.User()));

                for (var i = 0; i < cookie.length; i++) {
                    current = cookie[i];
                    cartOrder = new Thamco.Model.CartOrder();
                    cartOrder.ItemName(current.itemName);
                    cartOrder.ItemPrice(current.itemPrice);
                    self.Items(cartOrder);
                }
            }

            self.getWrappings = function (callback) {
                Thamco.Controller.Wrapping.Get({
                    success: callback
                })
            }

            self.getWrappingsSuccess = function (data, status, jqxhr) {
                var Wrapping, current;

                for (var i = 0; i < data.length; i++) {
                    Wrapping = new Thamco.Model.Wrapping();
                    current = data[i];
                    Wrapping.ID(current.ID);
                    Wrapping.TypeID(current.TypeID);
                    Wrapping.TypeName(current.TypeName);
                    Wrapping.RangeID(current.RangeID);
                    Wrapping.RangeName(current.RangeName);
                    Wrapping.Price(current.Price);
                    Wrapping.Size(current.Size);
                    self.Wrappings.push(Wrapping);
                }
            }
        }
    }
});