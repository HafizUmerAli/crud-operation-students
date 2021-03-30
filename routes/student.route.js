const express = require('express');
const router = express.Router();
const std_cont = require('../controllers/student.controller');

router.post('/create', std_cont.create);

router.get('/find', std_cont.find);

router.get('/find/:id', std_cont.findOne);

router.put('/update/:id', std_cont.update);

router.delete('/delete/:id', std_cont.delete);

module.exports = router;