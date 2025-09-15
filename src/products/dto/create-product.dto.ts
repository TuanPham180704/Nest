import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateProductsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number; 
}
