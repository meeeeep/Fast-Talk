console.log('hello from client.js');

const myApp = angular.module('fastTalk', ['ui.router']);

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

   //users landing page view
        .state('userslanding',{
            url: '/userslanding',
            template:'<userslanding></userslanding>'
        })
})