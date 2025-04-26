import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    new Product(1, 'สมาร์ทโฟน XYZ รุ่นล่าสุด', 25990,'https://placehold.co/400x300/3498db/FFFFFF?text=สมาร์ทโฟน'),
    new Product(2, 'โน้ตบุ๊ค ABC Ultra', 45900,'https://placehold.co/400x300/2ecc71/FFFFFF?text=โน้ตบุ๊ค'),


  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}