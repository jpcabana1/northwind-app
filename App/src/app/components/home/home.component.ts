import {
  ViewChild,
  Component,
  OnInit,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HomeResultModel } from 'src/app/models/home-result.model';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ICustomerService } from 'src/app/services/interfaces/icustomer.service';
import { customerOrders } from 'src/app/util/paths';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  pathOrders : string = customerOrders
  dataSource!: MatTableDataSource<HomeResultModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loading: boolean = true;
  defaultPaginatorPageSize: number = 10;
  defaultPageSize: number = 100;
  displayedColumns: string[] = [
    'CustomerId',
    'ContactName',
    'OrdersCount',
    'GotoCustomerOrders',
  ];

  private customerService: ICustomerService;

  constructor(@Inject(CustomerService) service: ICustomerService) {
    this.customerService = service;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getOrders(0, this.defaultPageSize);
  }

  async getOrders(pageIndex: number, pageSize: number) {
    const response = await this.customerService.getCustomerOrders(pageIndex, pageSize);
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    this.setLoading(false);
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    this.setLoading(true);
    this.getOrders(event.pageIndex, event.pageSize);
  }

  clearDataSource() {
    this.dataSource = new MatTableDataSource(new Array<HomeResultModel>());
  }

  setLoading(state: boolean) {
    this.loading = state;
  }
}
