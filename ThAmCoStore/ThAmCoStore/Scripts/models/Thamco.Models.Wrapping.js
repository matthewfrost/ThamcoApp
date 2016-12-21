var Thamco = $.extend(true, {}, Thamco, {
    Model: {
        Wrapping: function () {
            var self = this;

            self.ID = ko.observable(null);
            self.TypeID = ko.observable(null);
            self.TypeName = ko.observable(null);
            self.RangeID = ko.observable(null);
            self.RangeName = ko.observable(null);
            self.Price = ko.observable(null);
            self.Size = ko.observable(null);
        }
    }
});