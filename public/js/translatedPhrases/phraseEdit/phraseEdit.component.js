myApp.component('phraseEdit', {
    templateUrl: '/js/translatedPhrases/phraseEdit/phrasesEdit.html',
    controller: function(phraseService, $state, $stateParams){
        this.phrase = null;
        $state.go('phraseShow', { id: this.phrase._id });
    };
    this.save = function() {
        phraseService.update(this.story)
            .then(res =>{
                $state.go('phraseShow', {id: this.story._id });
        });
    };
    phraseService.getPhrase($stateParams.id)
        .then(res => {
            this.phrase = res.data;
    });

});