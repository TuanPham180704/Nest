import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsDto } from './create-product.dto';
export class UpdateProductDto extends PartialType(CreateProductsDto) {}
