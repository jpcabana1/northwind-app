package com.api.springboot.Repositories.JPA;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.springboot.Entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{}