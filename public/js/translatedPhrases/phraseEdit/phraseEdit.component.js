myApp.component('phraseEdit', {
    templateUrl: '/js/translatedPhrases/phraseEdit/phraseEdit.html',
    controller: function(phraseService, $state, $stateParams) {
        this.phrase = null;

        this.save = function (){
            console.log('hello')
            phraseService.update(this.phrase)
                .then(res => {
                    $state.go('phraseShow', { id: phrase._id});
            })
        };


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