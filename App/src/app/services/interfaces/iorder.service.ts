import { Observable } from "rxjs";
import { OrderCustomerModel } from "src/app/models/order-customer.model";
import { OrderDetailsModel } from "src/app/models/order-details.model";

export interface IOrderService {
  getOrdersByCustomer(customerId : string, pageIndex: number, pageSize: number) :  Promise<OrderCustomerModel[]>;
  getOrderDetails(orderId : number, pageIndex: number, pageSize: number) : Promise<OrderDetailsModel[]>;
}
