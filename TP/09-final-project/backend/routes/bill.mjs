import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello liste des Factures !')
})

router.get('/:id', (req, res) => {
  res.send(`Hello facture ${ req.params.id } !`)
})

export { router };

