var Thamco = $.extend(true, Thamco, {}, {
    Model: {
        WrappingOrder: function () {
            var self = this;

            self.Id = ko.observable(null);
            self.AccountName = ko.observable(null);
            self.CardNumber = ko.observable(null);
            self.ProductId = ko.observable(null);
            self.Quantity = ko.observable(null);
            self.TotalPrice = ko.observable(null);
        }
    }
});