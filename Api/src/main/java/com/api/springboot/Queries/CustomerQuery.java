package com.api.springboot.Queries;

public class CustomerQuery {

    public static String GetCustomerByIdPaginated = """
        SELECT 
            O.CustomerID
            , C.ContactName
            , COUNT(O.CustomerID) OrdersCount
        FROM Customers C INNER JOIN Orders O ON C.CustomerID = O.CustomerID
        GROUP BY O.CustomerID, C.ContactName
        ORDER BY O.CustomerID
        OFFSET :pageIndex ROWS FETCH NEXT :pageSize ROWS ONLY
            """;
}
