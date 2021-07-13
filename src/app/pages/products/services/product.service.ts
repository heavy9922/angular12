import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInter } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiURL = 'http://localhost:3000/products';

  constructor( private http:HttpClient) {  }

  getProducts():Observable<ProductInter[]>{
    return this.http.get<ProductInter[]>(this.apiURL);
  }


}
