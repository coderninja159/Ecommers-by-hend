export  interface Product{
    id: string,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[];
}

export interface Category{
    id: number;
    name: string;
    slug: string;
}

export interface User{
    id: number;
    fullname: string;
    email: string;
}

export interface Order{
    id: string;
    title: string;
    user: string;
    price: number;
    discountPercentage: number;
    brand: string;
    category: string;
    totalprice: number;
    date: number;
}

export interface Carditem{
    id: string;
    title: string;
    price: number;
    discountPercentage: number,
    brand: string;
    category: string;
    rating: number;
    images: string[];
}

