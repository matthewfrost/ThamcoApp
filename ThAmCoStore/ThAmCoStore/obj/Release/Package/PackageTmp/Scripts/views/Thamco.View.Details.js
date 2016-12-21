var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Details: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Details();
                ViewModel.getBoxDetails();
                $('.buy').on('click', Thamco.Views.Details.AddToCart);
            },

            AddToCart: function () {
                var user, cookie, obj;
                user = $('#user').text();
                cookie = Cookies.get(user);
                if (typeof cookie === 'undefined') {
                    Cookies.set(user, [{ itemName: ViewModel.SelectedBox().Name(), itemPrice: ViewModel.SelectedBox().Price() }]);
                }
                else {              
                    obj = JSON.parse(cookie);
                    obj.push({ itemName: ViewModel.SelectedBox().Name(), itemPrice: ViewModel.SelectedBox().Price() });
                    Cookies.set(user, obj);
                    debugger;
                }
            }
        }
    }
});

$(function () {
    Thamco.Views.Details.Init();
    $(document)
                .ajaxStop(function () {
                    ko.applyBindings(ViewModel);
                });
});