// require express

const express = require("express");

// require Router
const router = express.Router();

// require model

const Contact = require('../model/Contact')

//require controllers

const controllers = require('../controllers/contact.controller')

/* test

//router.get('/test', (req, res) => {
    res.send('hello world !!')
})

*/

// @desc: add a new contact
// @method: POST
// @patch: 'http://localhost:6000/api/contacts/'
// @data : req.body

router.post('/', controllers.addContact)

// @desc: get all contact
// @method: GET
// @patch: 'http://localhost:6000/api/contacts/'
// @data : no

router.get('/', controllers.getContacts)



// @desc: delete one  contact
// @method: DELETE
// @patch: 'http://localhost:6000/api/contacts/:id'
// @data : req.params

router.delete('/:id', controllers.deleteContact)


// @desc: get one  contact by id
// @method: GET
// @patch: 'http://localhost:6000/api/contacts/:_id'
// @data : req.params

router.get('/:_id', controllers.getContact)


// @desc: update one contact
// @method: PUT
// @patch: 'http://localhost:6000/api/contacts/:_id'
// @data : req.params and req.body


router.put('/:_id', controllers.updateContact)


module.exports = router;