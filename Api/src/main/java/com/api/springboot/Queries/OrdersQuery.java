package com.api.springboot.Queries;

public class OrdersQuery {
    public static String GetOrdersByCustomerId = """
                SELECT
                o.OrderID
                , o.CustomerID
                , o.OrderDate
                , o.RequiredDate
                , o.ShippedDate
                , od.Quantity
                , od.Discount
                , od.UnitPrice
                , p.ProductName
            FROM [dbo].[Orders] o 
                INNER JOIN [dbo].[Customers] cus ON o.CustomerID = cus.CustomerID
                INNER JOIN [dbo].[Order Details] od ON o.OrderID = od.OrderID
                INNER JOIN [dbo].[Products] p ON od.ProductID = p.ProductID
                INNER JOIN [dbo].[Categories] cat ON p.CategoryID = cat.CategoryID
            WHERE cus.CustomerID LIKE '%' + :CustomerId + '%'
            ORDER BY o.OrderID
            """;
}
