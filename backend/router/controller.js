const Product = require('../models/models');

const post = (req,res) => {
    const {name, price ,status, stock} = req.body; 
        Product.create({name, price, status , stock})
        .then(result  => res.send(result))
        .catch(e => res.send(e)); 
   
};

const index = (req, res) =>{
    Product.find().then(result => res.send(result))
    .catch(err => res.send(err));
}
const view = (req, res) => {
    const id = req.params.id
    Product.findById (id).then(result => res.send(result))
    .catch(err => res.send(err));
}
const edit = (req, res) => {
    const id = req.params.id
    const {name, price ,status, stock} = req.body; 
    Product.updateOne({_id : id} , {name:name , price: price , status: status , stock : stock}).then(result => res.send(result))
    .catch(err => res.send(err));
}

const destroy = (req, res) => {
    const id = req.params.id
    Product.deleteOne({_id : id}).then(result => res.send(result))
    .catch(err => res.send(err));
}
module.exports = {
    post,
    index,
    view,
    edit,
    destroy
}