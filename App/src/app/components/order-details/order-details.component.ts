import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsModel } from 'src/app/models/order-details.model';
import { IOrderService } from 'src/app/services/interfaces/iorder.service';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { customerOrders, home } from 'src/app/util/paths';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  @Input() orderId!: number;
  @Input() customerId!: string;
  dataSource!: MatTableDataSource<OrderDetailsModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loading: boolean = true;
  defaultPaginatorPageSize: number = 10;
  defaultPageSize: number = 100;

  displayedColumns: string[] = [
    'ProductName',
    'Quantity',
    'UnitPrice',
    'Discount',
  ];

  private orderService: IOrderService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(OrdersService) service: IOrderService
  ) {
    this.orderService = service;
    this.dataSource = new MatTableDataSource<OrderDetailsModel>([]);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.orderId = params['orderId'];
      this.customerId = params['customerId']
    });

    if (this.orderId === null || this.orderId === undefined) {
      this.router.navigate([home]);
    } else {
      this.getOrderDetails(this.orderId, 0, 100)
    }
  }

  async getOrderDetails(orderId: number, pageIndex: number, pageSize: number) {
    const response = await this.orderService.getOrderDetails(orderId, pageIndex, pageSize)
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    this.setLoading(false)
  }

  setLoading(state: boolean) {
    this.loading = state;
  }

  back(){
    this.router.navigate([customerOrders], {
      queryParams: { customerId: this.customerId },
    })
  }
}
