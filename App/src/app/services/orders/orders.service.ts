import { Injectable } from '@angular/core';
import { IOrderService } from '../interfaces/iorder.service';
import { OrderCustomerModel } from 'src/app/models/order-customer.model';
import { OrderDetailsModel } from 'src/app/models/order-details.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL } from 'src/app/util/temp-config';

@Injectable({
  providedIn: 'root',
})
export class OrdersService implements IOrderService {

  private path: string = '/orders/orders-by-customer-id';

  constructor(private http: HttpClient) {}

 async getOrdersByCustomer(customerId: string,pageIndex: number,pageSize: number): Promise<OrderCustomerModel[]> {

    const requestUrl : string = SERVER_URL + this.path;
    const requestHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',});
    const requestParameters: any = {  customerId: customerId, pageIndex: pageIndex, pageSize: pageSize };

    return new Promise<OrderCustomerModel[]>((resolve, reject) =>{
      try {
        this.http.get<OrderCustomerModel[]>(requestUrl, {headers: requestHeaders, params : requestParameters})
        .subscribe(response => resolve([...response]))
      } catch (error) {
        reject(new Array<OrderCustomerModel[]>());
      }
    });

  }
  getOrderDetails(
    orderId: number,
    pageIndex: number,
    pageSize: number
  ): Promise<OrderDetailsModel[]> {
    throw new Error('Method not implemented.');
  }
}
