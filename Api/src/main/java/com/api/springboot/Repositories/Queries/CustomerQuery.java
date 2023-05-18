package com.api.springboot.Repositories.Queries;

public class CustomerQuery {
    public static String GetCustomerById = 
                                    "SELECT *"
                                    + " FROM [dbo].[Customers]"
                                    + " WHERE CustomerID LIKE '%' + :CustomerId + '%'"
                                    + " ORDER BY CustomerID";
}
