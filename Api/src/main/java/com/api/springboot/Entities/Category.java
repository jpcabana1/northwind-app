package com.api.springboot.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Categories")
public class Category {

    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    @Column(name = "CategoryID", nullable = false)
    private Integer CategoryId;

    @Column(name = "CategoryName", nullable = false, length = 15)
    private String CategoryName;

    @Column(name = "Description")
    private String Description;

    @Lob
    @Column(name = "Picture")
    private byte[] Picture;

}


/*
CREATE TABLE [dbo].[Categories](
	[CategoryID] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](15) NOT NULL,
	[Description] [ntext] NULL,
	[Picture] [image] NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
 */