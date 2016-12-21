var Thamco = $.extend(true, {}, Thamco, {
    Model: {
        SelectionBox: function () {
            var self = this;

            self.ID = ko.observable(null);
            self.Name = ko.observable(null);
            self.Price = ko.observable(null);
            self.Description = ko.observable(null);
            self.Contents = ko.observableArray([]);
            self.Visible = ko.observable(null);
            self.Available = ko.observable(null);
        }
    }
});