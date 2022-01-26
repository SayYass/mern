const router = require('express').Router();
const productController = require('./controller')

router.post('/product', productController.post);
router.get('/product' ,  productController.index);
router.get('/product/:id' ,  productController.view);
router.put('/product/:id' ,  productController.edit);
router.delete('/product/:id' , productController.destroy);
module.exports = router;