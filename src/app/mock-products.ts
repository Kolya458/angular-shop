import Product from 'src/app/product-component/models/Product';
import Category from 'src/app/types/Category';

export const Products: Product[] = [
    {name: 'Cheese', description: 'Yellow', price: 200, isAvailable: false, category: Category.First},
    {name: 'Cheese', description: 'Green', price: 290, isAvailable: true, category: Category.Second},
    {name: 'Bread', description: 'Black', price: 30, isAvailable: true, category: Category.Third},
    {name: 'Water', description: 'Blue', price: 60, isAvailable: false, category: Category.First}
];
