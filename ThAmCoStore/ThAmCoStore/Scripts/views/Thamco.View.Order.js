var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Order: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Order();
                ViewModel.Init();
                ko.applyBindings(ViewModel);
            }
        }
    }
});

$(function () {
    Thamco.Views.Order.Init();
});