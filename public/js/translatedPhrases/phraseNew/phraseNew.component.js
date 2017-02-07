myApp.component('phraseNew',{
    templateUrl: '/js/translatedPhrases/phraseNew.html',
    controller: function(phraseService, $state){
        this.phrase = {
            english : ''
        };
        this.save = function () {
            phraseService.create(this.phrase)
                .then( res => {
                    $state.go('userslanding', { id: res.data._id });
            });

        };
    }
});