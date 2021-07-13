import { ProductService } from './services/product.service';
import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ProductInter } from './interface/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!:ProductInter[];
  constructor(private productSVC:ProductService) { }

  ngOnInit(): void {
    this.productSVC.getProducts().pipe(
      tap((listProduct:ProductInter[]) => this.products = listProduct)
    )
    .subscribe();
  }

  addTocard(product:ProductInter):void{
    console.log(product)
  }

}
