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
            }
        }
    }
});