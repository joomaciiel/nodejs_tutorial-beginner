var express = require('express');
var router = express.Router();

//Require de onde está a lógica das rotas.
let landing = require('../controllers/landing');
let user = require('../controllers/user');

//LOGIN
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);

//lead
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead);
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit.lead);
router.post('/lead/:lead_id/delete', landing.delete.lead);
router.post('/lead/:lead_id/delete-json', landing.delete.lead_json);

module.exports = router;