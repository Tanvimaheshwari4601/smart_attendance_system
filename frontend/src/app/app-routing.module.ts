import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminAuthenticationGuard } from './admin-authentication.guard';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MarkAttendenceComponent } from './mark-attendence/mark-attendence.component';
import { NewAdminRequestComponent } from './new-admin-request/new-admin-request.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailGuard } from './user-detail.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'login-user', component: LoginUserComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'registration',
    component: CreateUserComponent,
  },

  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UserListComponent,
      },
      { path: 'update-user/:id', component: UpdateUserComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'user-details/:id', component: UserDetailsComponent, canActivate: [UserDetailGuard] },
      {path : 'mark-att' ,  component : MarkAttendenceComponent},
      { path: 'Add-Product', component: AddProductComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'update-product/:id', component: UpdateProductComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path: 'sidenav', component: SidebarComponent },
      {
        path: 'new-admin-request',
        component: NewAdminRequestComponent,
        canActivate: [AdminAuthenticationGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
