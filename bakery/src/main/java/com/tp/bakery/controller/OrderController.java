package com.tp.bakery.controller;

import com.tp.bakery.execptions.NullDessertIdException;
import com.tp.bakery.model.Order;
import com.tp.bakery.service.BakeryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
    @Autowired
    BakeryService service;

    @GetMapping("/orders")
    List<Order> getAllOrders() throws NullDessertIdException {
        return service.getAllOrders();
    }

    @GetMapping("/orders/{orderId}")
    Order veiwOrderById(@PathVariable Integer orderId) throws NullDessertIdException {
        return service.viewOrderById(orderId);
    }
    @PutMapping("/editOrder")
    public int editOrder(@RequestBody Order partialOrder){
        return service.editOrder(partialOrder);
    }

    @DeleteMapping("/deleteOrder/{orderId}")
    public int deleteOrder(@PathVariable Integer orderId) {
            return service.deleteOrder(orderId);

    }

}
