import { ViewChild, Component, OnInit, Inject } from '@angular/core';
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
export class HomeComponent implements OnInit {
  loading: boolean = true;
  defaultPageSize : number = 10;
  displayedColumns: string[] = [
    'CustomerId',
    'ContactName',
    'OrdersCount',
    'ShowDetais',
  ];

  dataSource!: MatTableDataSource<HomeResultModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private customerService: ICustomerService;

  constructor(@Inject(CustomerService) service: ICustomerService) {
    this.customerService = service;
  }

  ngOnInit() {
    this.clearDataSource()
    setTimeout(() => this.getOrders(0, this.defaultPageSize), 2000);
  }

  onPageChange(event: PageEvent) {
    console.log(event)
    this.setLoading(true);
    this.clearDataSource();
    setTimeout(() => this.getOrders(event.pageIndex, event.pageSize), 2000);
  }

  getOrders(pageIndex: number, pageSize: number) {
    this.dataSource = new MatTableDataSource(this.customerService.getCustomerOrders(pageIndex, pageSize));
    this.dataSource.paginator = this.paginator;
    this.setLoading(false);
  }

  clearDataSource() {
    this.dataSource = new MatTableDataSource(new Array<HomeResultModel>());
  }

  setLoading(state: boolean) {
    this.loading = state;
  }
}
