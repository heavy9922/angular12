import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInter } from '../interface/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() row!: ProductInter
  @Output() addToCardClick = new EventEmitter<ProductInter>()
  constructor() { }

  ngOnInit(): void {

  }

  onclick():void{
    this.addToCardClick.emit(this.row)
  }

}


