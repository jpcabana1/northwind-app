import { Injectable } from '@angular/core';
import { IOrderService } from '../interfaces/iorder.service';
import { OrderCustomerModel } from 'src/app/models/order-customer.model';
import { OrderDetailsModel } from 'src/app/models/order-details.model';

const list : OrderCustomerModel[]= [
  {
    orderId: 10278,
    orderDate: '1996-08-12T00:00:00',
    shippedDate: '1996-08-16T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10280,
    orderDate: '1996-08-14T00:00:00',
    shippedDate: '1996-09-12T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10384,
    orderDate: '1996-12-16T00:00:00',
    shippedDate: '1996-12-20T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10444,
    orderDate: '1997-02-12T00:00:00',
    shippedDate: '1997-02-21T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10445,
    orderDate: '1997-02-13T00:00:00',
    shippedDate: '1997-02-20T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10524,
    orderDate: '1997-05-01T00:00:00',
    shippedDate: '1997-05-07T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10572,
    orderDate: '1997-06-18T00:00:00',
    shippedDate: '1997-06-25T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10626,
    orderDate: '1997-08-11T00:00:00',
    shippedDate: '1997-08-20T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10654,
    orderDate: '1997-09-02T00:00:00',
    shippedDate: '1997-09-11T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10672,
    orderDate: '1997-09-17T00:00:00',
    shippedDate: '1997-09-26T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10689,
    orderDate: '1997-10-01T00:00:00',
    shippedDate: '1997-10-07T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10733,
    orderDate: '1997-11-07T00:00:00',
    shippedDate: '1997-11-10T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10778,
    orderDate: '1997-12-16T00:00:00',
    shippedDate: '1997-12-24T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10837,
    orderDate: '1998-01-16T00:00:00',
    shippedDate: '1998-01-23T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10857,
    orderDate: '1998-01-28T00:00:00',
    shippedDate: '1998-02-06T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10866,
    orderDate: '1998-02-03T00:00:00',
    shippedDate: '1998-02-12T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10875,
    orderDate: '1998-02-06T00:00:00',
    shippedDate: '1998-03-03T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
  {
    orderId: 10924,
    orderDate: '1998-03-04T00:00:00',
    shippedDate: '1998-04-08T00:00:00',
    shipAddress: 'Berguvsv�gen  8',
    shipCity: 'Lule�',
    shipCountry: 'Sweden',
    shipPostalCode: 'S-958 22',
  },
];

@Injectable({
  providedIn: 'root'
})
export class OrdersService implements IOrderService{

constructor() { }
  getOrdersByCustomer(customerId: string): OrderCustomerModel[] {
    return customerId === 'BERGS'? list : [];
  }
  getOrderDetails(orderId: number): OrderDetailsModel[] {
    throw new Error('Method not implemented.');
  }

}
