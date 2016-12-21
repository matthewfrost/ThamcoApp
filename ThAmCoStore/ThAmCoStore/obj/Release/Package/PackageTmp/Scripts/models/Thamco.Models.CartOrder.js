var Thamco = $.extend(true, {}, Thamco, {
    Model: {
        CartOrder: function () {
            var self = this;

            self.ItemPrice = ko.observable(null);
            self.ItemName = ko.observable(null);
        }
    }
});