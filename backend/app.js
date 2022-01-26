require ('./config/config');
const express = require('express');
const logger = require('morgan');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors')
const Product = require('./router/router');

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
app.use(express.urlencoded({extended:true}));
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use('/api' , Product);
app.use(( req, res, next ) => {
    res.status(404);
    res.send({
        status : 'Failed',
        message : 'Resource ' +  req.originalUrl + ' NotFound'
    });
});
