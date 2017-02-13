console.log('hello from client.js');

const myApp = angular.module('fastTalk', ['ui.router', 'ui.materialize']);

myApp.config(function($stateProvider, $urlRouterProvider){
    //if the user goes astray, redirect to /home
    $urlRouterProvider.otherwise('/index');

    $stateProvider
    //landing page, primarily filled with welcome compoenent
        .state('index', {
            url: '/index',
            template:'<welcome></welcome>'
        })
    // login view page
        .state('login', {
            url: '/login',
            template:'<login></login>'
        })
    //signup view page
        .state('signup', {
            url: '/signup',
            template:'<signup></signup>'
        })

   //users landing page view and shows all users phrases
        .state('userslanding',{
            url: '/userslanding',
            template:'<userslanding></userslanding>',
            onEnter: function (Auth, $state) {
                if (!Auth.isLoggedIn()){
                    $state.go('index', {});
                }

            }
        })

    //Form to create a new phrase
        .state('phraseNew',{
            url: '/new',
            template: '<new-phrase></new-phrase>',
            onEnter: function (Auth, $state) {
                if (!Auth.isLoggedIn()){
                    $state.go('index', {});
                }

            }
        })

    // show a singular phrase
        .state('phraseShow', {
            url: '/show/:id',
            template: '<phrase-show></phrase-show>',
            onEnter: function (Auth, $state) {
                if (!Auth.isLoggedIn()){
                    $state.go('index', {});
                }

            }
        })

    //Edit a phrase
        .state('phraseEdit', {
            url: '/edit/:id',
            template: '<phrase-edit></phrase-edit>',
            onEnter: function (Auth, $state) {
                if (!Auth.isLoggedIn()){
                    $state.go('index', {});
                }

            }
        })
})