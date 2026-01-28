import bougainvillea from "../assets/images/bougainvillea.jpg";
import Monstera from "../assets/images/Monstera Plant.jpg";
import PeaceLily from "../assets/images/Peace Lily.jpg";
import Pothos from "../assets/images/Pothos.jpg";
import Rose from "../assets/images/Rose.jpg";


const products = [
  {
    id: 1,
    name: 'Pothos',
    price: 100,
    category: 'Indoor Plants',
    rating: 4.5,
    image: Pothos
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 150,
    category: 'Indoor Plants',
    rating: 4.0,
    image: PeaceLily,
  },
  {
    id: 3,
    name: 'Monstera',
    price: 200,
    category: 'Indoor Plants',
    rating: 3.8,
    image: Monstera,
  },
  {
    id: 4,
    name: 'Bougainvillea',
    price: 100,
    category: 'Outdoor Plants',
    rating: 3.8,
    image: bougainvillea,
  },
  {
    id: 5,
    name: 'Rose',
    price: 50,
    category: 'Outdoor Plants',
    rating: 3.8,
    image: Rose,
  },
];

export default products;
