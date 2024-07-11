import express from 'express'
import { router as billRouter } from './routes/bill.mjs'
const app = express()
const port = 3000

app.use(express.json()) // ici on définit que les body des requêtes seront automatiquement convertiens en format json dans nos contrôleurs de routes

app.get('/', (req, res) => {
  res.send('Bills API v1.0.0')
})
// on déclare les routes qui correspondent aux fichiers que l'on importe en haut de ce fichier, ici, les routes /bills, /bills/:id...
app.use('/bills', billRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})