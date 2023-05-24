import { Injectable } from '@angular/core';
import { HomeResultModel } from 'src/app/models/home-result.model';
import { ICustomerService } from '../interfaces/icustomer.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL } from 'src/app/util/temp-config';

@Injectable({
  providedIn: 'root',
})
export class CustomerService implements ICustomerService {
  path: string = '/home';

  constructor(private http: HttpClient) {}

  async getCustomerOrders(pageIndex: number,pageSize: number): Promise<HomeResultModel[]> {

    const requestUrl : string = SERVER_URL + this.path;
    const requestHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',});
    const requestParameters: any = { pageIndex: pageIndex, pageSize: pageSize };

    return new Promise<HomeResultModel[]>((resolve, reject) => {
      try {
        this.http.get<HomeResultModel[]>(requestUrl, {headers: requestHeaders, params: requestParameters,})
        .subscribe(response => resolve([...response]));
      } catch (error) {
        reject(new Array<HomeResultModel[]>())
      }
    });
  }
}
