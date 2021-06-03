import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { CartService } from './services/cart.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Formation AMBIENT-IT';

  cartProducts: Product[] = []

  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts
  }

  constructor(private cartService: CartService) {}
}
