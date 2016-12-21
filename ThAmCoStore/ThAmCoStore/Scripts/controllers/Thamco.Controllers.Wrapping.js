var Thamco = $.extend(true, {}, Thamco, {
    Controller: {
        Wrapping: {
            url: 'api/Wrapping',

            Get: function (options) {
                $.ajax({
                    url: Thamco.Controller.Wrapping.url,
                    type: 'GET',
                    success: options.success,
                    contentType: 'application/json'
                });
            },

            GetByID: function (options) {
                $.ajax({
                    url: Thamco.Controller.Wrapping.url + '/' + options.ID,
                    type: 'GET',
                    success: options.success,
                    contentType: 'application/json'
                });
            },
        }
    }
});