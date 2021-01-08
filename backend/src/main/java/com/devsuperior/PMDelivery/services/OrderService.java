package com.devsuperior.PMDelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.PMDelivery.dto.OrderDTO;
import com.devsuperior.PMDelivery.entities.Order;
import com.devsuperior.PMDelivery.repositories.OrderRepository;

@Service
public class OrderService {
 
	@Autowired
	private OrderRepository repository;
	
	@Transactional
	public List<OrderDTO> findAll(){
		
		List<Order> list = repository.findOrderWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
}
