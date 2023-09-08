package com.newproject.mobilestore.repositories.admin;

import org.springframework.data.jpa.repository.JpaRepository;

import com.newproject.mobilestore.models.admin.Item;

import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item, Long> {

    Optional<Item> findByCode(String code);
}

