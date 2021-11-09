import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';

@Pipe({
  name: 'filterCustomer'
})
export class FilterCustomerPipe implements PipeTransform {

  transform(value: Customer[], filterCustomerText:string): Customer[] {
    filterCustomerText=filterCustomerText?filterCustomerText.toLocaleLowerCase():""
    return filterCustomerText?
    value.filter((customer:Customer)=>customer.companyName.toLocaleLowerCase().indexOf(filterCustomerText)!==-1)
    :value;
  }

}
