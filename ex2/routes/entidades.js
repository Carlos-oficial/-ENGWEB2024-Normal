var express = require('express');
var router = express.Router();



router.get('/:id', async function(req, res, next) {
    try {
        console.log("sodihsaodh")
        const response = await fetch(`http://localhost:16000/contratos?entidade=${req.params.id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch contracts');
        }
        const contratos = await response.json();
        console.log(contratos)
        res.render('entidade', { entidade: req.params.id, contratos: contratos });
    } catch (error) {
        console.error('Error fetching contract:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;