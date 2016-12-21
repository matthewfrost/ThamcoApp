var Thamco = $.extend(true, {}, Thamco, {
    ViewModel: {
        Cart: function () {
            var self = this;

            self.Items = ko.observableArray([]);

            self.removeItem = function (item, event) {
                var index, cookieObj, user, removedItem;

                user = $('#user').text();
                index = self.Items().indexOf(item);
                cookieObj = JSON.parse(Cookies.get(user));
                removedItem = cookieObj.splice(index, 1);
                Cookies.set(user, cookieObj);
                self.Items.remove(item);
            }
        }
    }
});