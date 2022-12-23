import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product : Product=new Product();
  Category=['Clothing', 'Electronics', 'Electrical', 'Grocery', 'Footwear'];
  id! :number;


  constructor(private productService : ProductService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe({
      next : (data) =>{ this.product=data; },
    error : (err) => { console.log(err) }
    });
    
  }

  onUpdate(){
    console.log(this.product);
    this.productService.updateProduct(this.id, this.product).subscribe({
      next : (data) =>{ this.gotoProductList(); },
    error : (err) => { console.log(err) }
    });
    

  }
  gotoProductList(){
    this.router.navigate(['/homepage/product-list'])
  }

}
