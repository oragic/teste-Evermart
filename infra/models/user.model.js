const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', schema);
module.exports = User;