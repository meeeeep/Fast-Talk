var mongoose = require('mongoose');

var PhraseSchema = new mongoose.Schema({

english:     {type: String },
translation: {type: String},
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User'} //added in user for passport and mongoose to use to match users
});


module.exports = mongoose.model('Phrase', PhraseSchema);