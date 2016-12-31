var ViewModel;
var Thamco = $.extend(true, {}, Thamco, {
    Views: {
        Create: {
            Init: function () {
                ViewModel = new Thamco.ViewModel.Create();
                ViewModel.getItems(ViewModel.getItemsSuccess);
            }
        }
    }
});

$(function () {
    Thamco.Views.Create.Init();
    $(document)
            .ajaxStop(function () {
                ko.applyBindings(ViewModel);
                $('#loader').addClass('hidden');
                $('#items').removeClass('hidden');
            });
});