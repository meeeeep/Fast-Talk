myApp.component('navbar', {
    templateUrl: '/js/navbar/navbar.html',
    controller: function (Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;

        this.logout = function () {
            this.Auth.logout()
                .then(res => {
                $state.go('index');
        });
        };
    }

});