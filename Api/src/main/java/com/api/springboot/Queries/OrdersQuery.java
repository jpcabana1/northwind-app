package com.api.springboot.Queries;

public class OrdersQuery {
    public static String GetOrdersByCustomerId = """
            SELECT 
                o.OrderID
                , o.OrderDate
                , o.ShippedDate
                , o.ShipAddress
                , o.ShipCity
                , o.ShipCountry
                , o.ShipPostalCode
            FROM Orders o
            WHERE o.CustomerID = :customerId
            ORDER BY o.OrderID
            OFFSET :pageIndex ROWS FETCH NEXT :pageSize ROWS ONLY
            """;
    public static String GetOrderDetailsByOrderId = """
        SELECT 
            p.ProductName
            , od.Quantity
            , od.UnitPrice
            , od.Discount
        FROM [Order Details] od INNER JOIN  Products p ON od.ProductID = p.ProductID
        WHERE od.OrderID = :orderId
        ORDER BY od.OrderID
        OFFSET :pageIndex ROWS FETCH NEXT :pageSize ROWS ONLY
            """;
}
