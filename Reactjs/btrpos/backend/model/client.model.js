const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    clientname: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    address: {
        type: String,
        require: true,
        unique: true,
    },
    contact: {
        type: Number,
        require: true,
    },
    reference: {
        type: String,
        maxlength:100,
    },
    clientcode: {
        type: String,
        require: true,
        trim: true,
    }
}, {
    timestamp: true,
}); 

const client = mongoose.model('Client', clientSchema);

module.exports = client;
