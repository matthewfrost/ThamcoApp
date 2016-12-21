var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Details: function () {
            var self;

            self = this;

            self.SelectedBox = ko.observable(null);

            self.getBoxDetails = function () {
                var url, items = [], item;

                url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for (var i = 0; i < url.length; i++) {
                    item = url[i].split('=');
                    items.push(item[0]);
                    items[item[0]] = item[1];
                }
                debugger;

                Thamco.Controller.Box.GetByID({
                    success: success,
                    ID: items.ID
                });

                function success(data, status, jqxhr) {
                    var SelectionBox = new Thamco.Model.SelectionBox();
                    SelectionBox.ID(data.ID);
                    SelectionBox.Name(data.Name);
                    SelectionBox.Description(data.Description);
                    SelectionBox.Price(data.Price);
                    self.SelectedBox(SelectionBox);
                }
            }
        }
    }
});