package com.devsuperior.PMDelivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.PMDelivery.dto.OrderDTO;
import com.devsuperior.PMDelivery.dto.ProductDTO;
import com.devsuperior.PMDelivery.entities.Order;
import com.devsuperior.PMDelivery.entities.OrderStatus;
import com.devsuperior.PMDelivery.entities.Product;
import com.devsuperior.PMDelivery.repositories.OrderRepository;
import com.devsuperior.PMDelivery.repositories.ProductRepository;

@Service
public class OrderService {
 
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional
	public List<OrderDTO> findAll(){
		
		List<Order> list = repository.findOrderWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(),
				Instant.now(), OrderStatus.PENDING);
		for (ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		order = repository.save(order);
		return new OrderDTO(order);
		}
		
	}
