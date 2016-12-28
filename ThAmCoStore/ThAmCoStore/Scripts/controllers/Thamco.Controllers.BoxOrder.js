var Thamco = $.extend(true, {}, Thamco, {
    Controller: {
        BoxOrder: {
            url: 'api/BoxOrder',

            submitOrder: function (options) {
                $.ajax({
                    url: '/' + Thamco.Controller.BoxOrder.url,
                    type: 'POST',
                    success: options.success,
                    contentType: 'application/json',
                    data: JSON.stringify(options.data)
                });
            }
        }
    }
});