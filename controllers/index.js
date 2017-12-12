var express = require("express");
var router = new express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res){
    res.json({data:"Welcome! input '/films' for a list of regsitered films and potential reviews!"});
});

module.exports = router;
