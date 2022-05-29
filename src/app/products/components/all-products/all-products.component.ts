import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from './../../models/iProducts';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  allProducts:IProduct[]=[];
  allCategories:any;
  base64:any='';
  headertitle:string='Add Product';
  formInputs!:FormGroup

  constructor(private productService:ProductService,private fb:FormBuilder) { }

  ngOnInit(): void {
  this.getAllProducts();
  this.getAllCategories();
  this.formInputs=this.fb.group({
    title: ['',[Validators.required]],
    price: ['',[Validators.required]],
    description: ['',[Validators.required]],
    image: ['',[Validators.required]],
    category: ['',[Validators.required]]
  })
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe((res:any)=>{
    this.allProducts=res;
      },
      (error:any)=>{
        alert(error)})
  }
  getAllCategories(){
    this.productService.getAllCategories().subscribe((res:any)=>{
    this.allCategories=res;
    },
    (error)=>{
      alert(error)
    })
  }
  getProductCategories(category:string){
    this.productService.getProductByCategory(category).subscribe((res:any)=>{
    this.allProducts=res;
    },
    (error)=>{
      alert(error)
    })
  }
  selectedCategoryItems(event:any){

    this.formInputs.get('category')?.setValue(event.target.value)
  }
  getImagePath(event:any){
    const file= event.target.files[0];
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
      this.base64=reader.result;
      this.formInputs.get('image')?.setValue(this.base64)
    }
  }
  addProduct(){
    this.headertitle='Add Product'
    const model=this.formInputs.value;

    this.productService.addNewProduct(model).subscribe((res:any)=>{
      alert("Add New Product Success")
    })
  }
  updateProduct(item:any){
    this.headertitle='Update Product';
    this.formInputs.patchValue({
      title:item.title,
      price:item.price,
      description:item. description,
      image:item.image,
      category:item.category
    })
    this.base64=item.image
  }
  checkBtn(){

    this.headertitle='Add Product'
    this.formInputs.reset();
    this.base64='';

  }
}
