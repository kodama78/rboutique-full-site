//hours macaron images
import Chocolate from './assets/images/chocolate.png';
import Coconut from './assets/images/coconut.png';
import VioletCassis from './assets/images/violet-cassis.png';
import GreenTea from './assets/images/green-tea.png';
import PassionFruit from './assets/images/passion-fruit.png';
import Vanilla from './assets/images/vanilla.png';
import Coffee from './assets/images/coffee.png';
import Pistachio from './assets/images/pistachio.png';
import Raspbery from './assets/images/raspbery.png';
import Lemon from './assets/images/lemon.png';
import Rose from './assets/images/rose.png';
import TiffanyBlue from './assets/images/tiffany-blue.png';
import Caramel from './assets/images/caramel.png';
import Almond from './assets/images/almond.png';

export const hoursData = [
  {
    weekday: "Monday",
    startTime: "15:00",
    endTime: "16:00",
    macaron1: {
      flavor: "chocolate",
      img: Chocolate
    },
    macaron2: {
      flavor: "coconut",
      img: Coconut
    },
    backgroundColor: "#824603"
  },
  {
    weekday: "Tuesday",
    startTime: "14:00",
    endTime: "15:00",
    macaron1: {
      flavor: "violet cassis",
      img: VioletCassis
    },
    macaron2: {
      flavor: "green tea",
      img: GreenTea
    },
    backgroundColor: "transparent"
  },
  {
    weekday: "Wednesday",
    startTime: "09:00",
    endTime: "10:00",
    macaron1: {
      flavor: "passion fruit",
      img: PassionFruit
    },
    macaron2: {
      flavor: "vanilla",
      img: Vanilla
    },
    backgroundColor: "#df5277"
  },
  {
    weekday: "Thursday",
    startTime: "18:00",
    endTime: "19:00",
    macaron1: {
      flavor: "coffee",
      img: Coffee
    },
    macaron2: {
      flavor: "pistachio",
      img: Pistachio
    },
    backgroundColor: "transparent"
  },
  {
    weekday: "Friday",
    startTime: "11:00",
    endTime: "12:00",
    macaron1: {
      flavor: "raspbery",
      img: Raspbery
    },
    macaron2: {
      flavor: "lemon",
      img: Lemon
    },
    backgroundColor: "#a2304e"
  },
  {
    weekday: "Saturday",
    startTime: "13:00",
    endTime: "14:00",
    macaron1: {
      flavor: "rose",
      img: Rose
    },
    macaron2: {
      flavor: "tiffany blue",
      img: TiffanyBlue
    },
    backgroundColor: "transparent"
  },
  {
    weekday: "Sunday",
    startTime: "10:00",
    endTime: "11:00",
    macaron1: {
      flavor: "caramel",
      img: Caramel
    },
    macaron2: {
      flavor: "almond",
      img: Almond
    },
    backgroundColor: "#c39005"
  }
]

export const flavors = [
    'caribbean chocolate',
    'coconut',
    'colombian coffee',
    'green tea',
    'lemon',
    'madagascar vanilla',
    'passion fruit',
    'rose',
    'raspberry',
    'tiffany blue',
    'sicilian pistachio',
    'sweet wedding almond',
    'violet cassis',
    'salted caramel'
]

export const giftBoxes = [
    {
        includes: 'gift box of 6 macarons in raspberrywhite',
        price: 10
    },
    {
        includes: 'gift box of 12 macarons in white, pistachio, or violet',
        price: 20
    },
    {
        includes: 'gift box of 24 macarons in violet',
        price: 40
    },
    {
        includes: 'gift box of 36 macarons in silver',
        price: 60
    },
    {
        includes: `gift box ${String.fromCharCode( 224 )} la ronde of 60 macarons in violet or silver`,
        price: 120
    }
]

// shop macaron images
import ShopCaribbeanChocolate from './assets/images/shop/caribbean_chocolate.jpg';
import ShopCoconut from './assets/images/shop/coconut.jpg';
import ShopColumbianCoffee from './assets/images/shop/colombian_coffee.jpg';
import ShopGreenTea from './assets/images/shop/green_tea.jpg';
import ShopLemon from './assets/images/shop/lemon.jpg';
import ShopMadagascarVanilla from './assets/images/shop/madagascar_vanilla.jpg';
import ShopPassionFruit from './assets/images/shop/passion_fruit.jpg';
import ShopPistachio from './assets/images/shop/pistachio.jpg';
import ShopRaspberry from './assets/images/shop/raspberry.jpg';
import ShopRose from './assets/images/shop/rose.jpg';
import ShopSaltedCaramel from './assets/images/shop/salted_caramel.jpg';
import ShopSicilianPistachio from './assets/images/shop/sicilian_pistachio.jpg';
import ShopSilver from './assets/images/shop/silver.jpg';
import ShopSweetWeddingAlmond from './assets/images/shop/sweet_wedding_almond.jpg';
import ShopTiffanyBlue from './assets/images/shop/tiffany_blue.jpg';
import ShopTower from './assets/images/shop/tower.jpg';
import ShopViolet from './assets/images/shop/violet.jpg';
import ShopVioletCassis from './assets/images/shop/violet_cassis.jpg';
import ShopWhite from './assets/images/shop/white.jpg';


export const shopMacarons = [
    {
        name: 'Caribbean Chocolate',
        description: 'A mellow vibe with a hint of mint.',
        price: 1.65,
        img: ShopCaribbeanChocolate
    },
    {
        name: 'Coconut',
        description: 'Rich tropical creme with a seabreeze after taste.',
        price: 1.65,
        img: ShopCoconut
    },
    {
        name: 'Columbian Coffee',
        description: 'Exquisite Java with all the flavor and none of the kick.',
        price: 1.65,
        img: ShopColumbianCoffee
    },
    {
        name: 'Green Tea',
        description: 'Jade green tea with a delightfully raw leafy taste.',
        price: 1.65,
        img: ShopGreenTea
    },
    {
        name: 'Lemon',
        description: 'Tang ain\'t no thang, sweet lemonade comes to mind.',
        price: 1.65,
        img: ShopLemon
    },
    {
        name: 'Madagascar Vanilla',
        description: 'Like King Julien, it has a salty outside and a sweet inside.',
        price: 1.65,
        img: ShopMadagascarVanilla
    },
    {
        name: 'Passion Fruit',
        description: 'Has a strong fruity essence with a lovely after taste.',
        price: 1.65,
        img: ShopPassionFruit
    },
    {
        name: 'Raspberry',
        description: 'Smooth jazz and glass of red wine. ',
        price: 1.65,
        img: ShopRaspberry
    },
    {
        name: 'Rose',
        description: 'It taste’s like roses; or at least it taste as good as they smell.',
        price: 1.65,
        img: ShopRose
    },
    {
        name: 'Salted Caramel',
        description: 'It’s like putting salt on your caramel.',
        price: 1.65,
        img: ShopSaltedCaramel
    },
    {
        name: 'Sicilian Pistachio',
        description: 'It taste’s better then wasabi.',
        price: 1.65,
        img: ShopSicilianPistachio
    },
    {
        name: 'Sweet Wedding Almond',
        description: 'Love is in the air, o wait, that’s the macarons.',
        price: 1.65,
        img: ShopSweetWeddingAlmond
    },
    {
        name: 'Tiffany Blue',
        description: 'Perfect blend of rich chocolate, none of the cost. ',
        price: 1.65,
        img: ShopTiffanyBlue
    },
    {
        name: 'Violet Cassis',
        description: 'Intense to look at, sweet to eat.',
        price: 1.65,
        img: ShopVioletCassis
    }
]

export const shopGiftBoxes = [
    {
        name: 'Box of 6',
        description: 'Raspberry White',
        price: 10.00,
        img: ShopWhite
    },
    {
        name: 'Box of 12',
        description: 'White | Pistachio | Violet',
        price: 20.00,
        img: ShopPistachio
    },
    {
        name: 'Box of 24',
        description: 'Violet',
        price: 40.00,
        img: ShopViolet
    },
    {
        name: 'Box of 36',
        description: 'Silver',
        price: 60.00,
        img: ShopSilver
    },
    {
        name: 'Box of 60',
        description: 'Violet or Silver',
        price: 120.00,
        img: ShopViolet
    },
    {
        name: 'Tower of 60',
        description: 'Assorted Flavors',
        price: 120.00,
        img: ShopTower
    }
]