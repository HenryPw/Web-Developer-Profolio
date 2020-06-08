const router = require('express').Router();
let Client  = require('../model/client.model.js');

router.route('/').get((req,res) => {
    Client.find()
        .then(client => res.json(client))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const clientname = req.body.clientname;
    const address = req.body.address;
    const contact = Number(req.body.contact);
    const reference = req.body.reference;
    const clientcode = req.body.reference;

    const newClient = new Client({
        clientname,
        address,
        contact,
        reference,
        clientcode,
    });

    newClient.save()
        .then(() => res.json('Client added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Client.findById(req.params.id)
      .then(client => res.json(client))
      .catch(err => res. status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Client.findByIdAndDelete(req.params.id)
      .then(() => res.json('Client deleted.'))
      .catch(err => res. status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Client.findById(req.params.id)
      .then(Client => {
        client.clientname = req.body.clientname;
        client.address = req.body.address;
        client.contact = Number(req.body.contact);
        client.reference = req.body.reference;
        client.clientcode = req.body.clientcode;

            Client.save()
              .then(() => res.json('Client updated!'))
              .catch(err => res. status(400).json('Error: ' + err));
})
.catch(err => res. status(400).json('Error: ' + err));
});
module.exports = router;