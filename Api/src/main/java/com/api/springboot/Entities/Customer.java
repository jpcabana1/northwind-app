package com.api.springboot.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Customers")
public class Customer {

    @Id
    @Column(name="CustomerID", nullable=false, length=5)
    private String CustomerId;

    @Column(name="CompanyName", nullable=false, length=40)
    private String CompanyName;

    @Column(name="ContactName", length=30)
    private String ContactName;

    @Column(name="ContactTitle", length=30)
    private String ContactTitle;

    @Column(name="Address", length=60)
    private String Address;

    @Column(name="City", length=15)
    private String City;

    @Column(name="PostalCode", length=10)
    private String PostalCode;

    @Column(name="Country", length=15)
    private String Country;

    @Column(name="Phone", length=24)
    private String Phone;

    @Column(name="Fax", length=24)
    private String Fax;
    
}