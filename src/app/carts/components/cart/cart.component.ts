import { ProductService } from './../../../products/services/product.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts:any[]=[];
  products:any[]=[];
  formsInput!:FormGroup;
  details:any;
  total:number=0;
  constructor(private cartService:CartService,private fb:FormBuilder,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.formsInput=this.fb.group({
      start:[''],
      end:['']
    })
   this.getCarts();

  }
  getCarts(){
    this.cartService.getAllCarts().subscribe((res:any)=>{
      this.carts=res
    },(error)=>{alert(error)})
  }
  applyFilter(){
    let date=this.formsInput.value;
    this.cartService.getAllCarts(date).subscribe((res:any)=>{
    this.carts=res
    },
    (error)=>{alert(error)})
  }
  deleteCart(id:any){
    this.cartService.deleteCart(id).subscribe((res:any)=>{
      alert("cart delete successfully");
      this.getCarts()
    })
  }
 
  view(index:number){
    this.products=[];
    this.details=this.carts[index];
    for(let x in this.details.products){
       this.productService.getSingleProduct(this.details.products[x].productId)
       .subscribe((res:any)=>{
         this.products.push({ item:res,quantity:this.details.products[x].quantity})
       },(error)=>{alert(error)})
    }
    console.log(this.details)
  }
}
