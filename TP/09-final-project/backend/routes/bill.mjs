import express from 'express';
const router = express.Router();

// ici le / correspond à la route /bills/ (voir le index.mjs qui déclare l'import de ces routes avec app.use('/bills, billRoutes)
router.get('/', (req, res) => {
  res.send('Hello liste des Factures !')
})

// ici la route /bills/:id
router.get('/:id', (req, res) => {
  res.send(`Hello facture ${ req.params.id } !`)
})

export { router };

