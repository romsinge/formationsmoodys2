import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'amb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    title: '',
    price: 0
  }
  @Output() addToCart: EventEmitter<Product> = new EventEmitter()
  isImageMouseover: boolean = false

  ngOnInit(): void {
  }

  constructor() { }

  handleImageClick(event: MouseEvent) {
    console.log('IMAGE CLICK', event)
  }

  handleCartClick() {
    this.addToCart.emit(this.product)
  }

  toggleImageMouseover() {
    this.isImageMouseover = !this.isImageMouseover
  }

}
