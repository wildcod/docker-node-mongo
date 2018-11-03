const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const itemSchema = new mongoose.Schema({
     item:{
         type:String,
         required:true,
         lowercase:true
     }

})

const Items = mongoose.model('Items',itemSchema)

module.exports = Items