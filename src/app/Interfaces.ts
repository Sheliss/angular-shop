export interface Item {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Object;
    title: string;
}


export interface Cart {
    id: number;
    amount: number;
}