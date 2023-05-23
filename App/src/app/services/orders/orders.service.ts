import { Injectable } from '@angular/core';
import { IOrderService } from '../interfaces/iorder.service';
import { OrderCustomerModel } from 'src/app/models/order-customer.model';
import { OrderDetailsModel } from 'src/app/models/order-details.model';

const list : OrderCustomerModel[]= [
  {
    OrderId: 10278,
    OrderDate: '1996-08-12T00:00:00',
    ShippedDate: '1996-08-16T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10280,
    OrderDate: '1996-08-14T00:00:00',
    ShippedDate: '1996-09-12T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10384,
    OrderDate: '1996-12-16T00:00:00',
    ShippedDate: '1996-12-20T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10444,
    OrderDate: '1997-02-12T00:00:00',
    ShippedDate: '1997-02-21T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10445,
    OrderDate: '1997-02-13T00:00:00',
    ShippedDate: '1997-02-20T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10524,
    OrderDate: '1997-05-01T00:00:00',
    ShippedDate: '1997-05-07T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10572,
    OrderDate: '1997-06-18T00:00:00',
    ShippedDate: '1997-06-25T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10626,
    OrderDate: '1997-08-11T00:00:00',
    ShippedDate: '1997-08-20T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10654,
    OrderDate: '1997-09-02T00:00:00',
    ShippedDate: '1997-09-11T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10672,
    OrderDate: '1997-09-17T00:00:00',
    ShippedDate: '1997-09-26T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10689,
    OrderDate: '1997-10-01T00:00:00',
    ShippedDate: '1997-10-07T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10733,
    OrderDate: '1997-11-07T00:00:00',
    ShippedDate: '1997-11-10T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10778,
    OrderDate: '1997-12-16T00:00:00',
    ShippedDate: '1997-12-24T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10837,
    OrderDate: '1998-01-16T00:00:00',
    ShippedDate: '1998-01-23T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10857,
    OrderDate: '1998-01-28T00:00:00',
    ShippedDate: '1998-02-06T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10866,
    OrderDate: '1998-02-03T00:00:00',
    ShippedDate: '1998-02-12T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10875,
    OrderDate: '1998-02-06T00:00:00',
    ShippedDate: '1998-03-03T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
  },
  {
    OrderId: 10924,
    OrderDate: '1998-03-04T00:00:00',
    ShippedDate: '1998-04-08T00:00:00',
    ShipAddress: 'Berguvsv�gen  8',
    ShipCity: 'Lule�',
    ShipCountry: 'Sweden',
    ShipPostalCode: 'S-958 22',
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
