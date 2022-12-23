import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  loggedinUser : any;
  

  productList : Product[] =[];
  selectedProduct : any = {};
  constructor(private productService: ProductService,
    private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
    this.getProductList();  
    this.loggedinUser = this.userService.getLoggedInUser();
      
  }
  displayStyle = "none";
  
  openPopup(product : Product) {
    this.displayStyle = "block";
    this.selectedProduct = product;
  }
  closePopup() {
    this.displayStyle = "none";
    this.selectedProduct = {};
  }

  getProductList(){
    this.productService.getProductList().subscribe(data => {
      this.productList = data;
      console.log(this.productList);
      
    })
  }

  updateProduct(id:number){
    console.log(id);
       this.router.navigate(['/homepage/update-product' , id])   
  }

  viewProduct(id : number){
    this.router.navigate(['/homepage/product-details' , id])
  }

  deleteProduct(id: number){
    this.closePopup();
    this.productService.deleteProduct(id).subscribe(data => 
  {
    console.log(data);
    this.getProductList();
    
  })
  }
}
