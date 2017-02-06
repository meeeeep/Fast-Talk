console.log('hello from login component');

myApp.component('login', {
    templateUrl: '/js/auth/login/login.html',
    controller: function(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;
        this.errors = {};

        this.login = function(form) {
            this.submitted = true;

            if (form.$valid) {
                this.Auth.login({
                    username: this.user.username,
                    password: this.user.password
                })
                    .then((response) => {
                    console.log('login response:', response);
                // Logged in, redirect to stories
                $state.go('userslanding');
            })
            .catch(err => {
                    this.errors.login = err.message;
            });
            }
        };
    }

});