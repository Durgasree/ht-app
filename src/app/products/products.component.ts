import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products =  [];
  constructor(private fb: FormBuilder, private _productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts().subscribe(res => {
      this.products.push(res.products);
      this.products = this.products[0];

    })
  }


}
