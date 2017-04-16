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