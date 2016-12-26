var Thamco = $.extend(true, {}, Thamco, {
    Controller: {
        Order: {
            url: '/api/Order',

            submitOrder: function (options) {
                $.ajax({
                    url: Thamco.Controller.Order.url,
                    type: 'PUT',
                    success: options.success,
                    contentType: 'application/json',
                    data: JSON.stringify(options.data)
                });
            }
        }
    }
});