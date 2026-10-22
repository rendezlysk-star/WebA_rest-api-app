import { Component, inject } from '@angular/core';
import { ProductsRestService } from '../../services/products-rest-service';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  readonly productService = inject(ProductsRestService);
}
