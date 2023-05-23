import { Injectable } from '@angular/core';
import { IOrderService } from '../interfaces/iorder.service';
import { OrderCustomerModel } from 'src/app/models/order-customer.model';
import { OrderDetailsModel } from 'src/app/models/order-details.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL } from 'src/app/util/temp-config';

@Injectable({
  providedIn: 'root',
})
export class OrdersService implements IOrderService {
  constructor(private http: HttpClient) {}

  getOrdersByCustomer(
    customerId: string,
    pageIndex: number,
    pageSize: number
  ): Observable<OrderCustomerModel[]> {

    let path: string = '/orders/orders-by-customer-id';

    return this.http.get<OrderCustomerModel[]>(SERVER_URL + path, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: {
        customerId: customerId,
        pageIndex: pageIndex,
        pageSize: pageSize,
      },
    });
  }
  getOrderDetails(
    orderId: number,
    pageIndex: number,
    pageSize: number
  ): Observable<OrderDetailsModel[]> {
    throw new Error('Method not implemented.');
  }
}
