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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  dataSource!: MatTableDataSource<HomeResultModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loading: boolean = true;
  defaultPageSize: number = 10;
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
    this.clearDataSource();
    this.getOrders(0, this.defaultPageSize);
  }

  getOrders(pageIndex: number, pageSize: number) {
    const homeList: HomeResultModel[] = this.customerService.getCustomerOrders(
      pageIndex,
      pageSize
    );
    this.dataSource = new MatTableDataSource(homeList);
    this.dataSource.paginator = this.paginator;
    this.setLoading(false);
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    this.setLoading(true);
    this.clearDataSource();
    this.getOrders(event.pageIndex, event.pageSize);
  }

  clearDataSource() {
    this.dataSource = new MatTableDataSource(new Array<HomeResultModel>());
  }

  setLoading(state: boolean) {
    this.loading = state;
  }
}
