import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update.product.dto';

@Injectable()
export class ProductService {
  private product: Array<CreateProductsDto & { id: number }> = [];

  create(createProductDto: CreateProductsDto) {
    const newProduct = { id: Date.now(), ...createProductDto };
    this.product.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.product;
  }

  findOne(id: number) {
    return this.product.find((product) => product.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const productIndex = this.product.findIndex((product) => product.id === id);
    if (productIndex === -1) return null;
    this.product[productIndex] = {
      ...this.product[productIndex],
      ...updateProductDto,
    };
    return this.product[productIndex];
  }

  remove(id: number) {
    const productIndex = this.product.findIndex((product) => product.id === id);
    if (productIndex === -1) return null;
    const deleteProduct = this.product[productIndex];
    this.product.splice(productIndex, 1);
    return deleteProduct;
  }
}
