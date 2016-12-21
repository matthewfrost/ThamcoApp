var Thamco = $.extend(true, {}, Thamco,{
    ViewModel: {
        Index: function () {
            var self = this;

            self.Boxes = ko.observableArray([]);

            self.GetBoxes = function () {
                Thamco.Controller.Box.Get({
                    success: success
                });

                function success(data, status, jqxhr) {
                    var Box;
                    for (var i = 0; i < data.length; i++) {
                        Box = new Thamco.Model.SelectionBox();
                        Box.ID(data[i].ID);
                        Box.Name(data[i].Name);
                        Box.Description(data[i].Description);
                        Box.Price(data[i].Price);
                        ViewModel.Boxes.push(Box);
                    }
                }
            }

            self.boxDetails = function (item, event) {
                window.open("/Details/Index?ID=" + item.ID(), "_self");
            }
        }
    }
});