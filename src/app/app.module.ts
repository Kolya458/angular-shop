import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ProductComponentComponent } from './product-component/components/product/product-component.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductListComponent } from './product-component/components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponentComponent,
    CartComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
