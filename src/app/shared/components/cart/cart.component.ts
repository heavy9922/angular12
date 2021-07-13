import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl :'./cart.component.html' ,
})
export class CartComponent {
  quantity$ = this.shoppingSVC.quantityAccion$;
  total$ = this.shoppingSVC.totalAccion$;
  cart$ = this.shoppingSVC.cartAccion$;

  constructor(private shoppingSVC: ShoppingCartService) {}
}
