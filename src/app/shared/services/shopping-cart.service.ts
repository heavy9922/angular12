import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ProductInter } from "../../pages/products/interface/product.interface";

@Injectable(
    {providedIn: 'root'}
)

export class ShoppingCartService{
    products:ProductInter[] = [];

    private cartSubjet = new Subject<ProductInter[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    get totalAccion$():Observable<number>{
        return this.totalSubject.asObservable()
    }

    get quantityAccion$():Observable<number>{
        return this.quantitySubject.asObservable()
    }

    get cartAccion$():Observable<ProductInter[]>{
        return this.cartSubjet.asObservable()
    }

    updateCart(product:ProductInter){
        this.addToCart(product);
        this.quantityProd();
        this.calcTotal();
    }
    
    private addToCart(product:ProductInter):void{
        this.products.push(product);
        this.cartSubjet.next(this.products)
    }

    private quantityProd():void{
        const  quantity = this.products.length
        this.quantitySubject.next(quantity)
    }
    
    private calcTotal():void{
        const total = this.products.reduce((acc, prod) => acc += prod.price, 0)
        this.totalSubject.next(total);
    }
}