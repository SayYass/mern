const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sayyas:1234@cluster0.rvsyq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' );
const db = mongoose.connection;
db.on('error' , console.error.bind(console, 'Conecction error : ' ));
db.once('open' , () => console.log('Server database terhubung'));