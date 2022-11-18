import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavDrawerComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule,
    CatalogModule,
    AuthModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
