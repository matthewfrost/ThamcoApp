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

            submitOrder: function (options) {
                debugger;
                $.ajax({
                    url: '/' + Thamco.Controller.Wrapping.url,
                    type: 'POST',
                    success: options.success,
                    contentType: 'application/json',
                    data: JSON.stringify(options.data)
                });
            }
        }
    }
});