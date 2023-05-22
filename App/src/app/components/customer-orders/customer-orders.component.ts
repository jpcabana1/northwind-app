import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderCustomerModel } from 'src/app/models/order-customer.model';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css'],
})
export class CustomerOrdersComponent implements OnInit {
  customerId!: string;
  loading: boolean = false;
  defaultPageSize: number = 25;
  displayedColumns: string[] = [
    'OrderId',
    'OrderDate',
    'ShippedDate',
    'ShipAddress',
    'ShipCity',
    'ShipCountry',
    'ShipPostalCode',
  ];
  dataSource!: MatTableDataSource<OrderCustomerModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.dataSource = new MatTableDataSource<OrderCustomerModel>([]);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.customerId = params['customerId'];
    });

    if (this.customerId === null || this.customerId === undefined) {
      this.router.navigate(['/home']);
    }
  }
}
