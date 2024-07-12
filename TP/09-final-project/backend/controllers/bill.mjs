import fs from 'fs'
// on import les modules pour résoudre les chemins : path et url
import * as path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname( fileURLToPath(import.meta.url) )

const getItems = (req, res) => {

  // req représente la requête, on peut retrouver les différentes parties d'une requête http classique comme le head, le body, les params, la query et le hash
  // res représente la réponse que l'on renvoie au client, on peut remplir la réponse avec diférentes données, du texte, un fichier, du json... on simplement renvoyer un status http avec les fonctions suivantes :
  //res.send() -> renvoie du texte
  //res.sendStatus() -> renvoie le status http
  //res.json() -> renvoie du json
  //res.sendFile() -> renvoie un fichier
  //res.redirect() -> renvoie une redirection vers une autre url
  //res.render() -> renvoie un html


  // ici on lit le ficher ../db/bills.json
  // on utilise la fonction readFile pour lire le fichier de manière asynchrone
  // ----------------------------
  // fs.readFile(path.resolve(__dirname, '../db/bills.json'),
  //   (err, data) => {
  //     if (err) throw err
  //     // on renvoie le résultat dans la réposne (le contenu du fichier json)
  //     res.send(data)
  //   })

  // ou de manière synchrone avec readFileSync
  // ----------------------------
  try {
    const data = fs.readFileSync(path.resolve(__dirname, '../db/bills.json'))
    res.send(data)  
  } catch (error) {
    res.sendStatus(500)
    throw error
  }
}

const getItem = (req, res) => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, '../db/bills.json'))
    // on converti le json en données JavaScript
    const items = JSON.parse(data)
    // on recherche l'item avec l'id passé en paramètre
    const item = items.find(item => item.id == req.params.id)
    // on renvoie l'item si il existe
    if(item){
      res.json(item)
    } else {
      // sinon on renvoie une erreur 404
      res.sendStatus(404)
    }
  } catch (error) {
    // en cas d'erreur de lecture du fichier json... on renvoie une erreur serveur
    res.sendStatus(500)
    throw error
  }
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

