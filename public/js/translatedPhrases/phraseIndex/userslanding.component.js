console.log('hello from userslanding');

myApp.component('userslanding', {
    templateUrl: '/js/translatedPhrases/phraseIndex/userslanding.html',
    controller: function(phraseService, $stateParams, $state) {
        this.phrase = {};

        this.getPhrases = () => {
            phraseService.getPhrases(this.phrase.english)
            .then( res => {
                this.phrase.spanish = res.data;
                // console.log("This is your translator " + res.data);
                console.log(this.phrase);
            });
        };

        this.setPhrases = () => {
            phraseService.setPhrase(this.phrase)
            .then(res => {
                $state.go('phraseShow',{id: res.data._id});
                console.log("Button was clicked");
            });
        };

        // this.getPhrases = function () {
        //     console.log("You are hiiting me");
        // }
        // this.getPhrases();
    }
});

