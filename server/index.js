const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const pc = require('./controllers/products_controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static('build'))

let { CONNECTION_STRING: cs, PORT: port} = process.env;

massive(cs).then(db =>  {
    app.set('db', db);
    console.log('db is connected');
});


app.get('/api/products', pc.getProducts);

app.get('/api/products/:id', pc.getProduct);

app.post('/api/products', pc.createProduct);

app.put('/api/products/:id', pc.updateProduct);

app.delete('/api/products/:id', pc.deleteProduct);


app.listen(port, () => console.log(port));