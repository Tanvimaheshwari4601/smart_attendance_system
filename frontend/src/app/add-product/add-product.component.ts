import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product : Product=new Product();
  Category=['Clothing', 'Electronics', 'Electrical', 'Grocery', 'Footwear'];

  constructor(private productService:ProductService,
    private userService : UserService,
    private router:Router) { }

  
  

  saveProduct(){
    const loggedInUser = this.userService.getLoggedInUser();

    this.product.sellerId = loggedInUser.id;

    console.log(this.product);    

    this.productService.createProduct(this.product).subscribe({
      next: (data) => { console.log(data);
      this.gotoUserList();},
      complete: () => { console.log("complete") }, // completeHandler
      error: (err) => { console.log(err) },    // errorHandler 
  });
    
  }

  gotoUserList(){
    this.router.navigate(['/homepage/product-list']);
  }

  onAdd(){
    console.log(this.product);
    this.saveProduct();
  
  }

}
