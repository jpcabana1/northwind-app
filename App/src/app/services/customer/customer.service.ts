import { Injectable } from '@angular/core';
import { HomeResultModel } from 'src/app/models/home-result.model';
import { ICustomerService } from '../interfaces/icustomer.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService implements ICustomerService {
  url: string = 'http://localhost:8080/home';

  constructor(private http: HttpClient) {}

  getCustomerOrders(pageIndex: number, pageSize: number): Observable<HomeResultModel[]> {
   return this.http
      .get<HomeResultModel[]>(this.url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params: { pageIndex: pageIndex, pageSize: pageSize },
      });
  }
}
