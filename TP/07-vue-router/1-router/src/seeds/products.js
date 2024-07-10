export const products = [
  {
    id: 1,
    image: 'https://picsum.photos/id/31/200/300',
    title: 'Mon super poster',
    slug: 'super-poster',
    description: 'Superbe image à vendre',
    comments: [
      {
        id: 11,
        userName: 'Jean Dupont',
        comment: 'C’est le pied !',
        note: 4
      },
      {
        id: 12,
        userName: 'Marie Delachaise',
        comment: 'S’affiche très bien dans mon salon !',
        note: 5
      }
    ],
    price: '19.99'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/32/200/300',
    title: 'Paysage de montagne',
    slug: 'paysage-montagne',
    description: 'Une vue magnifique sur les montagnes enneigées',
    comments: [],
    price: '24.99'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/33/200/300',
    title: 'Coucher de soleil sur la mer',
    slug: 'coucher-soleil-mer',
    description: 'Un superbe cliché d’un coucher de soleil sur la mer',
    comments: [
      {
        id: 13,
        userName: 'Pierre Durand',
        comment: 'Les couleurs sont magnifiques !',
        note: 5
      }
    ],
    price: '29.99'
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/34/200/300',
    title: 'Champ de lavande',
    slug: 'champ-lavande',
    description: 'Une vue apaisante sur un champ de lavande en fleurs',
    comments: [],
    price: '19.99'
  },
  {
    id: 5,
    image: 'https://picsum.photos/id/35/200/300',
    title: 'Ville de nuit',
    slug: 'ville-nuit',
    description: 'Une vue époustouflante sur une ville illuminée la nuit',
    comments: [
      {
        id: 14,
        userName: 'Sophie Lefebvre',
        comment: 'J’adore les lumières de la ville !',
        note: 4
      },
      {
        id: 15,
        userName: 'Marc Dubois',
        comment: 'Une très belle photo, bravo à l’artiste !',
        note: 5
      }
    ],
    price: '34.99'
  }
]
