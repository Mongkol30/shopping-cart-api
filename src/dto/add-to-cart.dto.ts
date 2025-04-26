import { IsInt, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class AddToCartDto {
  @IsInt()
  @Type(() => Number)
  productId: number;

  @IsInt()
  @IsPositive()
  @Min(1)
  @Type(() => Number)
  quantity: number;
}