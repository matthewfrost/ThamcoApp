var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Cart: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Cart();
                Thamco.Views.Cart.getCookies();
            },

            getCookies: function () {
                var cookie, user, current, cartOrder;
                user = $('#user').text();
                cookie = JSON.parse(Cookies.get(user));
                for (var i = 0; i < cookie.length; i++) {
                    current = cookie[i];
                    cartOrder = new Thamco.Model.CartOrder();
                    cartOrder.ItemName(current.itemName);
                    cartOrder.ItemPrice(current.itemPrice);
                    ViewModel.Items.push(cartOrder);
                }
                ko.applyBindings(ViewModel);
            }
        }
    }
});

$(function () {
    Thamco.Views.Cart.Init();
});