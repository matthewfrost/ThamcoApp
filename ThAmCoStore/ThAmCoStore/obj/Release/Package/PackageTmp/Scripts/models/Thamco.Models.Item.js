var Thamco = $.extend(true, {}, Thamco, {
    Model: {
        Item: function () {
            var self = this;

            self.ID = ko.observable(null);
            self.EAN = ko.observable(null);
            self.Supplier = ko.observable(null);
            self.CategoryID = ko.observable(null);
            self.Category = ko.observable(null);
            self.BrandID = ko.observable(null);
            self.Brand = ko.observable(null);
            self.Name = ko.observable(null);
            self.Description = ko.observable(null);
            self.Price = ko.observable(null);
            self.InStock = ko.observable(null);
            self.ExpectedRestock = ko.observable(null);
        }
    }
});