var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Details: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Details();
                ViewModel.Init();
                ViewModel.getLoggedInUser();
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
