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

        this.getSavedPhrases();
    }
});

// phraseService.editPhrases($stateParams.id)
//     .then(res =>{
//     this.savedPhrases = res.data;
// });