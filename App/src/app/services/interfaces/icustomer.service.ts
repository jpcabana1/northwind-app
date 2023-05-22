import { HomeResultModel } from "src/app/models/home-result.model";

export interface ICustomerService{
  getCustomerOrders(pageIndex: number, pageSize: number) : HomeResultModel[];
}
