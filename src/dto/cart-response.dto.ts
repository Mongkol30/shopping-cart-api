export class CartItemResponseDto {
    id: number;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }
  
  export class CartSummaryDto {
    totalItems: number;
    totalPrice: number;
  }
  
  export class CartResponseDto {
    items: CartItemResponseDto[];
    summary: CartSummaryDto;
  }