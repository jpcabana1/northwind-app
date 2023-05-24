import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-grid-button',
  templateUrl: './home-grid-button.component.html',
  styleUrls: ['./home-grid-button.component.css'],
})
export class HomeGridButtonComponent implements OnInit {
  @Input() customerId!: string;
  @Input() orderId!: string;
  @Input() route!: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  click() {
    if (this.customerId !== null && this.customerId !== undefined) {
      this.router.navigate([this.route], {
        queryParams: { customerId: this.customerId },
      });
    }

    if (this.orderId !== null && this.orderId !== undefined) {
      this.router.navigate([this.route], {
        queryParams: { orderId: this.orderId, customerId: this.customerId },
      });
    }
  }
}
