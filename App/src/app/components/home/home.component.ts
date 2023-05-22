import {
  AfterViewInit,
  ViewChild,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { MatPaginator, PageEvent  } from '@angular/material/paginator';
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
  private customerService: ICustomerService;

  displayedColumns: string[] = ['CustomerId', 'ContactName', 'OrdersCount'];
  dataSource!: MatTableDataSource<HomeResultModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(@Inject(CustomerService) service: ICustomerService) {
    this.customerService = service;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(
      this.customerService.getCustomerOrders()
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event : PageEvent){
    console.log(event);
  }


}
