import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CartController } from './controllers/cart.controller';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';

@Module({
  imports: [],
  controllers: [ProductsController, CartController],
  providers: [ProductsService, CartService],
})
export class AppModule {}