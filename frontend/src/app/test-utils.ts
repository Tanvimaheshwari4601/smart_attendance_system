import { Product } from "./product";
import { User } from "./user";

export const userData = (name : string, status : string) : User => {
    const user = new User();
    user.firstname = name;
    user.lastname = name;
    user.approved = true;
    user.approvedStatus = status;
    user.city = 'Gandhinagar';
    user.emailid = 'valid@email.com';
    user.role = 'Admin';
  
    return user;
    
  }

  export const productData = (title : string, price : string, category : string) : Product => {
    const product = new Product();
    product.productTitle = title;
    product.category = category;
    product.imgURL = "https://www.google.com/search?q=footwear&";
    product.price = price;
     return product;

  }

 
  