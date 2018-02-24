import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      street: '123 Main Street',
      city: 'Anytown',
      state: 'California',
      region: 'West'
    }
  };
}
