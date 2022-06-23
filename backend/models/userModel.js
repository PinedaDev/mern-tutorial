const mongoose = require('mongoose')

const userScheema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add a email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
},
    {
        timestamps: true
    })


module.exports = mongoose.model('User', userScheema)
