export class CartItem {
    id: number;
    productId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(id: number, productId: number, quantity: number) {
      this.id = id;
      this.productId = productId;
      this.quantity = quantity;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }