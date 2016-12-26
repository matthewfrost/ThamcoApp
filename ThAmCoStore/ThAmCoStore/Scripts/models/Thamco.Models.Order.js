var Thamco = $.extend(true, {}, Thamco, {
    Model: {
        Order: function () {
            var self = this;

            self.Id = ko.observable(null);
            self.AccountName = ko.observable(null);
            self.CardNumber = ko.observable(null);
            self.ProductId = ko.observable(null);
            self.Quantity = ko.observable(null);
            self.ProductName = ko.observable(null);
            self.ProductEan = ko.observable(null);
            self.When = ko.observable(null);
            self.TotalPrice = ko.observable(null);
            self.Supplier = ko.observable(null);
        }
    }
});