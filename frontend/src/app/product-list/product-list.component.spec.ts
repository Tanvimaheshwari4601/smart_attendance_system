import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { BrowserModule } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';
import { productData } from '../test-utils';

let mock = (function() {
  let store:any = {
    userData : JSON.stringify({
      role : 'Admin'
    })
  };
  return {
    getItem: function(key: string) {
      return store[key];
    },
    setItem: function(key : string, value : any) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', { 
  value: mock,
});

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [
        UserService,
        ProductService
      ],
      imports:[
        RouterTestingModule,
        HttpClientModule,
        BrowserModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should show 3 items in list', () => {
    component.productList = [
      productData('Heels', '560' , 'Footwear'),
      productData('Microwave', '5000' , 'Electronics'),
      productData('PenDrive','2500', 'Electronics')
    ];

    fixture.detectChanges();

    const product = fixture.debugElement.nativeElement.querySelectorAll('.data-row');
    
    expect(product.length).toEqual(3);

  })

  it('should call update product', () => {
    component.productList = [
      productData('Heels', '560' , 'Footwear'),
      productData('Microwave', '5000' , 'Electronics'),
      productData('PenDrive','2500', 'Electronics')
    ];

    fixture.detectChanges();
    const spyUpdateProduct = spyOn(component, 'updateProduct');
    const updateProductBtn = fixture.debugElement.nativeElement.querySelector('#update-product-btn');
    console.log(updateProductBtn);
    updateProductBtn.click();
    
    expect(spyUpdateProduct).toHaveBeenCalled();

  })

  it('should call delete product', () => {
    component.productList = [
      productData('Heels', '560' , 'Footwear'),
      productData('Microwave', '5000' , 'Electronics'),
      productData('PenDrive','2500', 'Electronics')
    ];

    fixture.detectChanges();
    const spyDeleteProduct = spyOn(component, 'openPopup');
    const DeleteProductBtn = fixture.debugElement.nativeElement.querySelector('#delete-product-btn');
    console.log(DeleteProductBtn);
    DeleteProductBtn.click();
    
    expect(spyDeleteProduct).toHaveBeenCalled();

  })

  it('should call productDetails product', () => {
    component.productList = [
      productData('Heels', '560' , 'Footwear'),
      productData('Microwave', '5000' , 'Electronics'),
      productData('PenDrive','2500', 'Electronics')
    ];

    fixture.detectChanges();
    const spyProductDetail = spyOn(component, 'viewProduct');
    const productDetailBtn = fixture.debugElement.nativeElement.querySelector('#view-product-btn');
    console.log(productDetailBtn);
    productDetailBtn.click();
    
    expect(spyProductDetail).toHaveBeenCalled();

  })
});
