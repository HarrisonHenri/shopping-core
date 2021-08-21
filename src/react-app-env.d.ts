/// <reference types="react-scripts" />
declare module 'store/reduxStore'
declare module 'home/product'

interface Product {
  name: string;
    image: string;
    price: number;
    description: string
}