console.log('hello from userslanding');

myApp.component('userslanding', {
    templateUrl: '/js/translatedPhrases/phraseIndex/userslanding.html',
    controller: function(phraseService, $stateParams, $state) {
        this.phrases = null;

        this.getPhrases = function(){
            phraseService.getPhrases()
                .then( res => {
                this.phrases = res.data;
            console.log("This is your translator " + res.data);
            // console.log(this.phrases);

        })

        };

        // this.getPhrases = function () {
        //     console.log("You are hiiting me");
        // }
        this.getPhrases();

    }
});

