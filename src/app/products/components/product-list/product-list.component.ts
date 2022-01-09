import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProductModel } from '../../models/products.models';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
  products: IProductModel[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onItemAddedToCart(item: Partial<IProductModel>): void {
    this.cartService.addItemToCartList(
      item.id as number,
      item.name as string,
      item.price as number
    );
  }
}
