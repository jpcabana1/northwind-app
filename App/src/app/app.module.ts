import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomerService } from './services/customer/customer.service';
import { HomeComponent } from './components/home/home.component';
import { OrdersService } from './services/orders/orders.service';
import { HomeGridButtonComponent } from './components/home-grid-button/home-grid-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import {MatGridListModule} from '@angular/material/grid-list'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HomeComponent,
    HomeGridButtonComponent,
    CustomerOrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [CustomerService, OrdersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
