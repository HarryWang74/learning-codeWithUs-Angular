import { Component, OnInit, Input } from '@angular/core';
import {Address} from '../address';
@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {
  @Input() address: Address;

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
  constructor() { }

  ngOnInit() {
  }

}
