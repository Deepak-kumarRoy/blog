import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent, children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path:'search',
        component: SearchComponent
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
