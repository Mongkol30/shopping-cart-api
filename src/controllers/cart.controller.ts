import { 
    Controller, 
    Get, 
    Post, 
    Delete, 
    Body, 
    Param, 
    ParseIntPipe, 
    NotFoundException, 
    BadRequestException 
  } from '@nestjs/common';
  import { CartService } from '../services/cart.service';
  import { AddToCartDto } from '../dto/add-to-cart.dto';
  
  @Controller('cart')
  export class CartController {
    constructor(private readonly cartService: CartService) {}
  
    @Post()
    async addToCart(@Body() addToCartDto: AddToCartDto) {
      try {
        const cartItem = this.cartService.addToCart(addToCartDto);
        return {
          success: true,
          data: cartItem,
        };
      } catch (error) {
        if (error instanceof NotFoundException) {
          throw new NotFoundException(error.message);
        }
        throw new BadRequestException(error.message);
      }
    }
  
    @Get()
    async getCart() {
      const cart = this.cartService.getCart();
      return {
        success: true,
        data: cart,
      };
    }
  
    @Delete(':id')
    async removeFromCart(@Param('id', ParseIntPipe) id: number) {
      try {
        this.cartService.removeFromCart(id);
        return {
          success: true,
          message: 'Cart item deleted successfully',
        };
      } catch (error) {
        throw new NotFoundException(error.message);
      }
    }
  }