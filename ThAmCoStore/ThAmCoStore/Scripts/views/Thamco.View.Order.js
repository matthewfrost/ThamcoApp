var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Order: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Order();
            }
        }
    }
});

$(function () {
    Thamco.Views.Order.Init();
});