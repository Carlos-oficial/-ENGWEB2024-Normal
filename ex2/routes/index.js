var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await fetch('http://localhost:16000/contratos');
    if (!response.ok) {
      throw new Error('Failed to fetch contracts');
    }
    const contratos = await response.json();
    res.render('index', { title: 'Contratos', contratos: contratos });
  } catch (error) {
    console.error('Error fetching contracts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;


router.get('/:id', async function(req, res, next) {
  try {
    const response = await fetch(`http://localhost:16000/contratos/${req.params.id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch contracts');
    }
    const contrato = await response.json();
    console.log(contrato)
    res.render('contrato', { title: 'Contratos', contrato: contrato });
  } catch (error) {
    console.error('Error fetching contract:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
