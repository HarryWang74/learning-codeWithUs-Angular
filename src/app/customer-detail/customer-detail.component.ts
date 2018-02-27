import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input()
  customer: Customer;
  @Output()
  shift = new EventEmitter<number>();
  showAddress = true;

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
  constructor() { }

  ngOnInit() {
  }

  left()  { this.shift.emit(-1); }
  right() { this.shift.emit(1); }
}
