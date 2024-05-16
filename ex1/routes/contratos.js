
var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')
/*
var multer = require('multer')
const upload = multer({ dest: 'uploads/' })
var fs = require('fs')
*/


/* GET contratos */
router.get('/', function (req, res) {
    if (req.query.entidade) {
        Contrato.listComEntidade(req.query.entidade)
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro))
    } else if (req.query.tipo) {
        Contrato.listComTipo(req.query.tipo)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    } else {
        Contrato.list()
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro))
    }

});

router.get('/:id', function (req, res) {
    Contrato.findById(Number(req.params.id))
        .then(data => {console.log(data); res.jsonp(data)})
        .catch(erro => res.jsonp(erro))
});

router.get('/entidades', function (req, res) {
    Contrato.listEntidades()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});


router.get('/tipos', function (req, res) {
    Contrato.listTipos()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});



router.delete('/:id', function (req, res) {
    Contrato.remove(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

router.put('/:id', function(req, res) {
    Contrato.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    });


module.exports = router;
