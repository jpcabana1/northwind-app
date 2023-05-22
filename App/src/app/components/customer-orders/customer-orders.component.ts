import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  @Input() customerId!: string;

  constructor(
    private route: ActivatedRoute
    , private router: Router
    ) { }

  ngOnInit() {
    if(this.customerId === null || this.customerId === undefined) {
      this.router.navigate(['/home'])
    }
  }

}
