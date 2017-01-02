var Thamco = $.extend(true, {}, Thamco, {
    Controller: {
        Box: {
            url: '/api/Box',

            Get: function (options) {
                $.ajax({
                    url: Thamco.Controller.Box.url,
                    type: 'GET',
                    success: options.success,
                    contentType: 'application/json'
                });
            },

            GetByID: function (options) {
                $.ajax({
                    url: Thamco.Controller.Box.url + '/' + options.ID,
                    type: 'GET',
                    success: options.success,
                    contentType: 'application/json'
                });
            },

            EditBox: function (options) {

                $.ajax({
                    url: Thamco.Controller.Box.url + '/' + options.ID,
                    type: 'POST',
                    success: options.success,
                    contentType: 'application/json',
                    data: JSON.stringify(options.data)
                });
            },

            CreateNewBox: function (options) {
                $.ajax({
                    url: Thamco.Controller.Box.url,
                    type: 'PUT',
                    success: options.success,
                    contentType: 'application/json',
                    data: JSON.stringify(options.data)
                });
            },

            RemoveBox: function (options) {
                $.ajax({
                    url: Thamco.Controller.Box.url,
                    type: 'DELETE',
                    success: options.success,
                    contentType: 'application/json',
                    data: JSON.stringify(options.ID)
                });
            }
        }
    }
});