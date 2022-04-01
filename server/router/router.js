const router = require ('express').Router()
const controller = require('../controller/controller');
const auth = require('../midWare/auth');

router.post('/register',controller.registerU);
router.post('/login',controller.login);
router.delete('/delete',auth,controller.delete);

module.exports = router;