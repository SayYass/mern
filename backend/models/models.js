const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : [false, 'Field harus terisi'],
        minlength : 3,
        maxlength :  50
    },
    price : {
        type : Number,
        required : true,
        min : 1000,
        max : 10000000000
    },
    status : {
        type : Boolean,
        required : true
    },
    stock : {
        type: Number,
        required : true
    }
});

const Product = mongoose.model('Product' , productSchema);
module.exports = Product;