import { Injectable, NotFoundException } from '@nestjs/common';
import { AddToCartDto } from '../dto/add-to-cart.dto';
import { CartItemResponseDto, CartResponseDto, CartSummaryDto } from '../dto/cart-response.dto';
import { CartItem } from '../models/cart-item.model';
import { ProductsService } from './products.service';

@Injectable()
export class CartService {
    private cartItems: CartItem[] = [];
    private nextId = 1;

    constructor(private readonly productsService: ProductsService) { }

    addToCart(addToCartDto: AddToCartDto): CartItem {
        const { productId, quantity } = addToCartDto;

        const product = this.productsService.findOne(productId);
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        const cartItem = new CartItem(this.nextId++, productId, quantity);
        this.cartItems.push(cartItem);

        return cartItem;
    }

    getCart(): CartResponseDto {
        const items: CartItemResponseDto[] = this.cartItems.map(item => {
            const product = this.productsService.findOne(item.productId);
            if (!product) {
                throw new Error(`Product with id ${item.productId} not found`);
            }

            return {
                id: item.id,
                productName: product.name,
                quantity: item.quantity,
                unitPrice: product.price,
                totalPrice: product.price * item.quantity,
            };
        });

        const summary: CartSummaryDto = {
            totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: items.reduce((sum, item) => sum + item.totalPrice, 0),
        };

        return {
            items,
            summary,
        };
    }

    removeFromCart(id: number): void {
        const index = this.cartItems.findIndex(item => item.id === id);
        if (index === -1) {
            throw new NotFoundException('Cart item not found');
        }

        this.cartItems.splice(index, 1);
    }
}