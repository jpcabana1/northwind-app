import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderCustomerModel } from 'src/app/models/order-customer.model';
import { IOrderService } from 'src/app/services/interfaces/iorder.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css'],
})
export class CustomerOrdersComponent implements OnInit {
  customerId!: string;
  loading: boolean = false;
  defaultPaginatorPageSize: number = 10;
  defaultPageSize: number = 100;
  displayedColumns: string[] = [
    'OrderId',
    'OrderDate',
    'ShippedDate',
    'ShipAddress',
    'ShipCity',
    'ShipCountry',
    'ShipPostalCode',
    'ShowDetais'
  ];
  dataSource!: MatTableDataSource<OrderCustomerModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private orderService: IOrderService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(OrdersService) service: IOrderService
  ) {
    this.orderService = service;
    this.dataSource = new MatTableDataSource<OrderCustomerModel>([]);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.customerId = params['customerId'];
    });

    if (this.customerId === null || this.customerId === undefined) {
      this.router.navigate(['/home']);
    } else {
      this.load();
    }
  }

  async load() {
    const response = await this.orderService.getOrdersByCustomer(this.customerId, 0, 100)
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
  }
}
