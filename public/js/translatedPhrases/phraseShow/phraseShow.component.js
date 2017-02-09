console.log('hello from phraseShow');

myApp.component('phraseShow', {
    templateUrl: '/js/translatedPhrases/phraseShow/phraseShow.html',
    controller: function (phraseService, $stateParams, $state) {
        this.phrases= null;

        this.getUserPhrases = function(){
            phraseService.getUserPhrases()
                .then(res => {
                    this.phrases = res.data
            });

        };

    }
});

