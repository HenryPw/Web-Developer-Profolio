const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(process.env)
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const productRouter = require('./routes/product');
const clientRouter = require('./routes/client');

app.use('/products', productRouter);
app.use('/clients', clientRouter);

app.listen(port, () => {
    console.log('Server is running on port: ${port}');
});