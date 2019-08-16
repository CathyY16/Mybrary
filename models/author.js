const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

//module.exports = mongoose.model('Authortest', authorSchema) //create Authortest table in database
module.exports = mongoose.model('Author', authorSchema)