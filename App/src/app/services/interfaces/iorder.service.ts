import { OrderCustomerModel } from "src/app/models/order-customer.model";
import { OrderDetailsModel } from "src/app/models/order-details.model";

export interface IOrderService {
  getOrdersByCustomer(customerId : string) : OrderCustomerModel[];
  getOrderDetails(orderId : number) : OrderDetailsModel[];
}
