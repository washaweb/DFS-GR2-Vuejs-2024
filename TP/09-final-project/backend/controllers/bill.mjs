const getItems = (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Facture 1',
      date: '2021-01-01',
      amount: 1000,
      paid: false
    },
    {
      id: 2,
      name: 'Facture 2',
      date: '2021-01-02',
      amount: 2000,
      paid: true
    },
    {
      id: 3,
      name: 'Facture 3',
      date: '2021-01-03',
      amount: 3000,
      paid: false
    }
  ])
}

const getItem = (req, res) => {
  res.send(`Facture N° ${ req.params.id }`)
}

const patchItem = (req, res) => {
  res.send(`Enregistrement de la Facture N° ${ req.params.id }`)
}

const postItem = (req, res) => {
  res.send(`Création d'une nouvelle Facture`)
}

const deleteItem = (req, res) => {
  res.send(`Suppression de la Facture N° ${ req.params.id }`)
}

export default {
  deleteItem,
  getItem,
  getItems,
  patchItem,
  postItem
}

