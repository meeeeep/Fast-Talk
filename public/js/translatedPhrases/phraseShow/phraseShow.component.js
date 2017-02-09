console.log('hello from phraseShow');

myApp.component('phraseShow', {
    templateUrl: '/js/translatedPhrases/phraseShow/phraseShow.html',
    controller: function (phraseService, $stateParams, $state) {
        this.savedPhrases= null;

        this.getSavedPhrases = function(){
            phraseService.getSavedPhrases()
                .then(res => {
                    this.savedPhrases = res.data;
            });
        };

        this.editPhrases = (phrase) => {
            console.log('We need to edit the phrase:', phrase._id);
             $state.go('phraseEdit', {id: phrase._id});
        };

        this.delete = function (phrase) {
            console.log(' deleting phrases', phrase);
            phraseService.delete(phrase)
            .then(res => {
                this.getSavedPhrases();
                $state.go('phraseShow');
            });

        };

        this.getSavedPhrases();
    }
});

// phraseService.editPhrases($stateParams.id)
//     .then(res =>{
//     this.savedPhrases = res.data;
// });