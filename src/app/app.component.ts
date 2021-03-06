import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
    products: Product[];
    
    constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(cars => this.products = cars);
        this.primengConfig.ripple = true;
    }
}
