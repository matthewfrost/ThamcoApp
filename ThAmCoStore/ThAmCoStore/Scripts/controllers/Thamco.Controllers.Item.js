var Thamco = $.extend(true, {}, Thamco, {
    Controller: {
        Item: {
            url: '/api/Item',

            Get: function (options) {
                $.ajax({
                    url: Thamco.Controller.Item.url,
                    type: 'GET',
                    success: options.success,
                    contentType: 'application/json'
                });
            },

            GetForBox: function (options) {
                $.ajax({
                    url: Thamco.Controller.Item.url,
                    Type: 'GET',
                    ID: options.ID,
                    success: options.success,
                    contentType: 'application/json'
                });
            }
        }
    }
});