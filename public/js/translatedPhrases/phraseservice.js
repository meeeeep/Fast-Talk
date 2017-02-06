myApp.service('phraseService', function($http){

    // Get all of the phrases
    this.getPhrases = function() {
        return $http.get('/api/phrases');
    };

    // Get a single phrase by ID
    this.getStory = function(id) {
        return $http.get('/api/phrases/' + id);
    };

    // Create a new phrase
    this.create = function(story) {
        return $http.post('/api/phrases', phrase);
    };

    // Edit a single phrase by ID
    this.update = function(story) {
        return $http.put('/api/phrases/' + phrase._id, phrase);
    };

    // Delete a phrase by ID
    this.delete = function(story) {
        console.log('we are deleting something');
        return $http.delete('/api/phrases/' + phrase._id);
    };
});
