import { Dessert} from '../app/interfaces/dessert';

const mockDessert1: Dessert = {
    dessertId:1,
    name:"Pineapple Cake",
    description: "yummy",
    price :16.00,
    image:"some image"
};

const mockDessert2: Dessert = {
    dessertId:2,
    name:"Strawberry Cake",
    description: "yummy",
    price :16.00,
    image:"some image"
};

const mockDessert3: Dessert = {
    dessertId:3,
    name:"M&M Cookies",
    description: "yummy",
    price :16.00,
    image:"some image"
};

const mockDessertArray: Dessert[] = [mockDessert1,mockDessert2,mockDessert3];

export { mockDessert1,mockDessert2,mockDessert3,mockDessertArray };