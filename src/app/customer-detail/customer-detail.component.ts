import { Component, OnInit, Input  } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input()
  customer: Customer;

  showAddress = true;

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
  constructor() { }

  ngOnInit() {
  }

}
