const router = require('express').Router();
let Product = require('../model/product.model.js');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const productname = req.body.productname;
    const description = req.body.description;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);
    const cost = Number(req.body.cost);
    const productcode = req.body.procductcode;

    const newProduct = new Product({
        productname,
        description,
        quantity,
        price,
        cost,
        productcode,
});

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

    router.route('/:id').get((req, res) => {
        Product.findById(req.params.id)
          .then(product => res.json(product))
          .catch(err => res. status(400).json('Error: ' + err));
});

    router.route('/:id').delete((req, res) => {
        Product.findByIdAndDelete(req.params.id)
          .then(() => res.json('Product deleted.'))
          .catch(err => res. status(400).json('Error: ' + err));
});
    router.route('/update/:id').post((req, res) => {
        Product.findById(req.params.id)
          .then(Product => {
              product.productname = req.body.productname;
              product.description = req.body.description;
              product.quantity = Number(req.body.quantity);
              product.price = Number(req.body.price);
              product.cost = Number(req.body.cost);
              product.productcode = req.body.procductcode;

              Product.save()
              .then(() => res.json('Product updated!'))
              .catch(err => res. status(400).json('Error: ' + err));
    })
    .catch(err => res. status(400).json('Error: ' + err));
    });


module.exports = router;



