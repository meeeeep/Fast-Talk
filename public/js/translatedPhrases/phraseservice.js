myApp.service('phraseService', function($http) {

// Get a single story by ID
    this.getPhrases = function(phrase) {
        return $http.get('/phrases/' + phrase);
    };

    //save a new Phrase
    this.setPhrase= function (phrase) {
        return $http.post('/phrases', phrase);

    };

    //get all users stories
    this.getUserPhrases = function(){
    return $http.get('/phrases')
    };
});

//     //edit a new Phrase
//     this.editPhrase = function (phrase) {
//         return $http.put('phrases' + phrase._id, phrase);
//     }
//
// });


    // // Get all of the phrases
    // this.getPhrases = function() {
    //     return $http.get('/phrases');
    // };
    //
    // // Get a single phrase by ID
    // this.getPhrase = function(id) {
    //     return $http.get('/api/phrases/' + id);
    // };
    //
    // // Create a new phrase
    // this.create = function(phrase) {
    //     return $http.post('/api/phrases', phrase);
    // };
    //
    // // Edit a single phrase by ID
    // this.update = function(phrase) {
    //     return $http.put('/api/phrases/' + phrase._id, phrase);
    // };
    //
    // // Delete a phrase by ID
    // this.delete = function(phrase) {
    //     console.log('we are deleting something');
    //     return $http.delete('/api/phrases/' + phrase._id);
    // };
// });

// this.getPhrases = function() {
//
//     var serviceData ={};
//     $http({
//         method: 'GET',
//         url: '/phrases'
//     }).then(function successCallback(response) {
//         serviceData = response.data
//         console.log(serviceData)
//
//     }, function errorCallback(response) {
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//         console.log(response)
//     });
//     return serviceData;
// };