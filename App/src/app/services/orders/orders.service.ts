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
  constructor(private http: HttpClient) {}

 async getOrdersByCustomer(customerId: string,pageIndex: number,pageSize: number): Promise<OrderCustomerModel[]> {
    let path: string = '/orders/orders-by-customer-id';
    const requestUrl : string = SERVER_URL + path;
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
  async getOrderDetails(orderId: number,pageIndex: number,pageSize: number): Promise<OrderDetailsModel[]> {

    let path: string = '/orders/order-details';
    const requestUrl : string = SERVER_URL + path;
    const requestHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',});
    const requestParameters: any = {  orderId: orderId, pageIndex: pageIndex, pageSize: pageSize };

    return new Promise<OrderDetailsModel[]>((resolve, reject) =>{
      try {
        this.http.get<OrderDetailsModel[]>(requestUrl, {headers: requestHeaders, params : requestParameters})
        .subscribe(response => resolve([...response]))
      } catch (error) {
        reject(new Array<OrderDetailsModel[]>());
      }
    })
  }
}
