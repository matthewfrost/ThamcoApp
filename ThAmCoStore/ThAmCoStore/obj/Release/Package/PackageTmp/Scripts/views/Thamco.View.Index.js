var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Index: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Index();
                ViewModel.GetBoxes();
            }
        }
    }
});

$(function () {
    Thamco.Views.Index.Init();
    $(document)
                    .ajaxStop(function () {
                        ko.applyBindings(ViewModel);
                    });
});