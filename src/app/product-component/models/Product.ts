import Category from 'src/app/types/Category';

interface Product {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Category;
}

export default Product;

