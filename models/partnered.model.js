const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const partnerSchema = new Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    address: {type: String, required: true}
})

module.exports = mongoose.model('Partner', partnerSchema);