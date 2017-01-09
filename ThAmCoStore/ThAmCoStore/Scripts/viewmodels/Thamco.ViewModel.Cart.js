var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Cart: function () {
            var self = this;

            self.User = ko.observable(null);
            self.Recipient = ko.observable(null);
            self.Message = ko.observable(null);
            self.Items = ko.observable(null);
            self.Wrappings = ko.observableArray([]);
            self.BoxOrder = new Thamco.Model.BoxOrder();
            self.WrappingCost = ko.observable(0);
            self.SelectedWrapping = ko.observable(new Thamco.Model.Wrapping());

            self.TotalCost = ko.pureComputed(function () {
                if (typeof self.SelectedWrapping() != 'undefined') {
                    if (self.SelectedWrapping().ID() != null) {
                        return parseFloat(self.Items().ItemPrice()) + parseFloat(self.SelectedWrapping().Price());
                    }
                    else {
                        return parseFloat(self.Items().ItemPrice()) + parseFloat(self.Wrappings()[0].Price());
                    }
                }
            });

            self.removeItem = function (item, event) {
                var index, cookieObj, user, removedItem;

                Cookies.remove(self.User());
                self.Items(null);
            }

            self.Purchase = function (box, event, debug) {
                debug = debug || false; 
                if (self.pageValidation()) {
                    self.BoxOrder.Recipient(self.Recipient());
                    self.BoxOrder.Message(self.Message());
                    self.BoxOrder.AccountName(self.User());
                    self.BoxOrder.Total(self.TotalCost());
                    Cookies.set(self.User(), ko.mapping.toJSON(self.BoxOrder));
                    Cookies.set(self.User() + "wrapping", ko.mapping.toJSON(self.SelectedWrapping()));

                    if (!debug) {
                        window.open("/Order/Index", "_self");
                    }
                    return true;
                }
                else {
                    return false;
                }
            }

            self.pageValidation = function () {
                var result;
                result = true;
                if (self.Recipient() == null) {
                    result = false;
                }
                else {
                    if (self.Recipient().trim() == "") {
                        result = false;
                    }
                }

                return result;
            }

            self.getCookies= function (callback) {
                var cookie, current, cartOrder;

                self.User($('#user').text());
                cookie = Cookies.get(self.User());

                if (cookie !== null && typeof cookie !== 'undefined') {
                    cookie = JSON.parse(Cookies.get(self.User()));
                    self.getBox(cookie.itemID, callback);
                }
                
            }

            self.getBox = function (boxID, callback) {
                Thamco.Controller.Box.GetByID({
                    success: callback,
                    ID: boxID,
                });
            }

            self.getBoxSuccess = function (data, status, jqxhr) {
                var cartOrder;

                self.BoxOrder.BoxID(data.ID);
                
                cartOrder = new Thamco.Model.CartOrder();
                cartOrder.ItemName(data.Name);
                cartOrder.ItemPrice(data.Price);

                self.Items(cartOrder);
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