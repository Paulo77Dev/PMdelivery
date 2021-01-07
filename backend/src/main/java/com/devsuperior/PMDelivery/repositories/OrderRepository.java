package com.devsuperior.PMDelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.PMDelivery.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
