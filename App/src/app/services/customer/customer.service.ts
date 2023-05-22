import { Injectable } from '@angular/core';
import { HomeResultModel } from 'src/app/models/home-result.model';
import { ICustomerService } from '../interfaces/icustomer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomerService {

constructor() { }
  getCustomerOrders(): HomeResultModel[] {

    const ELEMENT_DATA: HomeResultModel[] = [
      { CustomerId: 'ALFKI', ContactName: 'Maria Anders', OrdersCount: 6 },
      { CustomerId: 'ANATR', ContactName: 'Ana Trujillo', OrdersCount: 4 },
      { CustomerId: 'ANTON', ContactName: 'Antonio Moreno', OrdersCount: 7 },
      { CustomerId: 'AROUT', ContactName: 'Thomas Hardy', OrdersCount: 13 },
      { CustomerId: 'BERGS', ContactName: 'Christina Berglund', OrdersCount: 18 },
      { CustomerId: 'BLAUS', ContactName: 'Hanna Moos', OrdersCount: 7 },
      { CustomerId: 'BLONP', ContactName: 'Fr?d?rique Citeaux', OrdersCount: 11 },
      { CustomerId: 'BOLID', ContactName: 'Mart?n Sommer', OrdersCount: 3 },
      { CustomerId: 'BONAP', ContactName: 'Laurence Lebihan', OrdersCount: 17 },
      { CustomerId: 'BOTTM', ContactName: 'Elizabeth Lincoln', OrdersCount: 14 },
      { CustomerId: 'BSBEV', ContactName: 'Victoria Ashworth', OrdersCount: 10 },
      { CustomerId: 'CACTU', ContactName: 'Patricio Simpson', OrdersCount: 6 },
      { CustomerId: 'CENTC', ContactName: 'Francisco Chang', OrdersCount: 1 },
      { CustomerId: 'CHOPS', ContactName: 'Yang Wang', OrdersCount: 8 },
      { CustomerId: 'COMMI', ContactName: 'Pedro Afonso', OrdersCount: 5 },
      { CustomerId: 'CONSH', ContactName: 'Elizabeth Brown', OrdersCount: 3 },
      { CustomerId: 'DRACD', ContactName: 'Sven Ottlieb', OrdersCount: 6 },
      { CustomerId: 'DUMON', ContactName: 'Janine Labrune', OrdersCount: 4 },
      { CustomerId: 'EASTC', ContactName: 'Ann Devon', OrdersCount: 8 },
      { CustomerId: 'ERNSH', ContactName: 'Roland Mendel', OrdersCount: 30 },
      { CustomerId: 'FAMIA', ContactName: 'Aria Cruz', OrdersCount: 7 },
      { CustomerId: 'FOLIG', ContactName: 'Martine Ranc?', OrdersCount: 5 },
      { CustomerId: 'FOLKO', ContactName: 'Maria Larsson', OrdersCount: 19 },
      { CustomerId: 'FRANK', ContactName: 'Peter Franken', OrdersCount: 15 },
      { CustomerId: 'FRANR', ContactName: 'Carine Schmitt', OrdersCount: 3 },
      { CustomerId: 'FRANS', ContactName: 'Paolo Accorti', OrdersCount: 6 },
      { CustomerId: 'FURIB', ContactName: 'Lino Rodriguez', OrdersCount: 8 },
      { CustomerId: 'GALED', ContactName: 'Eduardo Saavedra', OrdersCount: 5 },
      { CustomerId: 'GODOS', ContactName: 'Jos? Pedro Freyre', OrdersCount: 10 },
    ];
    return ELEMENT_DATA;
  }
}
