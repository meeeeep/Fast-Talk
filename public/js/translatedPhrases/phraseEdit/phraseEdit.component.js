myApp.component('phraseEdit', {
    templateUrl: '/js/translatedPhrases/phraseEdit/phraseEdit.html',
    controller: function(phraseService, $state, $stateParams) {
        this.phrase = {};

        this.save = function() {
            console.log('hello');
            phraseService.update($stateParams.id)
                .then( res => {
                    $state.go('phraseShow', { id: this.phrase._id});
            });
        };
phraseService.editPhrases($stateParams.id)
    .then( res => {
        this.phrase = res.data;
});

        // this.save = function () {
        //
        //     });
        // }

        // this.editPhrases = (phrase) => {
        //     console.log('We need to edit the phrase:', phrase);
        // }
    //     phraseService.getPhrase($stateParams.id)
    //         .then(res => {
    //         this.phrase = res.data;
    // });
    //
    }

});