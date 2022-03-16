const express = require('express');
const ctl = require('../controllers/task.ctl.js')
const router = express.Router();

router.get('/home', ctl.gethome);

router.get('/contact', ctl.getcontact);

router.get('/profile', ctl.getprofile);

router.get('/singin', ctl.getsingin);

router.get('/singup', ctl.getsingup);


module.exports = router;