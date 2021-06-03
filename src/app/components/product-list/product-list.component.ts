import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'amb-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchString: string = ''
  products: Array<Product> = []

  ngOnInit(): void {
    this.products = this.dataService.products
  }

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}

  handleAddToCart(product: Product) {
    this.cartService.addProduct(product)
  }

}
