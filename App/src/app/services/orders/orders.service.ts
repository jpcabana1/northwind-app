import { Injectable } from '@angular/core';
import { IOrderService } from '../interfaces/iorder.service';
import { OrderCustomerModel } from 'src/app/models/order-customer.model';
import { OrderDetailsModel } from 'src/app/models/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService implements IOrderService{

constructor() { }
  getOrdersByCustomer(customerId: string): OrderCustomerModel[] {
    throw new Error('Method not implemented.');
  }
  getOrderDetails(orderId: number): OrderDetailsModel[] {
    throw new Error('Method not implemented.');
  }

}
