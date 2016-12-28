var Thamco = $.extend(true, {}, Thamco, {
    Model: {
        BoxOrder: function () {
            var self = this;

            this.ID = ko.observable(null);
            this.AccountName = ko.observable(null);
            this.CardNumber = ko.observable(null);
            this.BoxID = ko.observable(null);
            this.Recipient = ko.observable(null);
            this.Message = ko.observable(null);
            this.Total = ko.observable(null);
        }
    }
});