import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  currentCustomer:Customer;
  filterCustomerText:""
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe(response=>{
      this.customers=response.data
    })
  };

  setCurrentCustomer(customer:Customer){
    this.currentCustomer=customer;
  };

  getCurrentCustomerClass(customer:Customer){
    if (customer==this.currentCustomer) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
