var Thamco = $.extend(true, {}, Thamco, {
    Controller: {
        User: {
            url: '/api/User',

            GetByEmail: function (options) {
                var actUrl;
                actUrl = Thamco.Controller.User.url + '?Email=' + options.Email;
                debugger;
                $.ajax({
                    url: actUrl,
                    type: 'GET',
                    success: options.success,
                    contentType: 'application/json'
                });
            }
        }
    }
});