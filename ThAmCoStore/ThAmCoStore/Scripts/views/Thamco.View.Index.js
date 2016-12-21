var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Index: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Index();
                ViewModel.getLoggedInUser();
                ViewModel.GetBoxes(ViewModel.GetBoxSuccess);
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