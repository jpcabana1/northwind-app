USE Northwind
--Home
SELECT 
	O.CustomerID
	, C.ContactName
	, COUNT(O.CustomerID) OrdersCount
FROM Customers C INNER JOIN Orders O ON C.CustomerID = O.CustomerID
GROUP BY O.CustomerID, C.ContactName
ORDER BY O.CustomerID
OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY
FOR JSON PATH;

--Orders by customer
SELECT 
	  o.OrderID
	, o.OrderDate
	, o.ShippedDate
	, o.ShipAddress
	, o.ShipCity
	, o.ShipCountry
	, o.ShipPostalCode
FROM Orders o
WHERE o.CustomerID = 'BERGS'
ORDER BY o.OrderID
OFFSET 0 ROWS FETCH NEXT 20 ROWS ONLY
FOR JSON PATH;

--Order details
SELECT 
	p.ProductName
	, od.Quantity
	, od.UnitPrice
	, od.Discount
FROM [Order Details] od INNER JOIN  Products p ON od.ProductID = p.ProductID
WHERE od.OrderID = 10280
ORDER BY od.OrderID
OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY
FOR JSON PATH;
