import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerAddressComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
