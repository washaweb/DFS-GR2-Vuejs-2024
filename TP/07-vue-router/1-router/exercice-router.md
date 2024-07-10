# Exercice router

- Ajouter une page catalogue (liste) qui liste 5 produits de type poster, avec comme structure de donnée :

```js
{
  id: 1,
  image: 'https://picsum.photos/id/31/200/300',
  titre: 'Mon super poster',
  description: 'Superbe image à vendre',
  comments: [
    {
      id: 11,
      userName: 'Jean Dupont',
      comment: 'C’est le pied !',
      note: 4,
    },
    {
      id: 12,
      userName: 'Marie Delachaise',
      comment: 'S’affiche très bien dans mon salon !',
      note: 5,
    }
  ],
  prix: '19.99',
}
```

- Dans la liste, on n'affiche que le titre, l' image et le prix, et un bouton pour afficher le détail.
- Ajouter une page détail de produit qui permet de naviger vers le détail du produit.
- Dans la page détail du produit, on affichera toutes les données du produit (image, titre, description, comments et prix)
