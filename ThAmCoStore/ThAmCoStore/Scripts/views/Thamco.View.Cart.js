var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Cart: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Cart();
                ViewModel.getCookies();
                ViewModel.getWrappings(ViewModel.getWrappingsSuccess);
                ko.applyBindings(ViewModel);
            }  
        }
    }
});

$(function () {
    Thamco.Views.Cart.Init();
});