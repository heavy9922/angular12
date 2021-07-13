import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInter } from '../interface/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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


