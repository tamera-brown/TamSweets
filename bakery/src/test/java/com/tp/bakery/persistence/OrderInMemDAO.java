package com.tp.bakery.persistence;


import com.tp.bakery.model.Order;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@Profile("ServiceTesting")
public class OrderInMemDAO implements OrderDAO{

    private List<Order> allOrders = new ArrayList<>();

    @Override
    public List<Order> getAllOrders() {

        List<Order> copy = new ArrayList<>();
        for (Order copies : allOrders) {
            copy.add(new Order(copies));
        }
        return allOrders;
    }

    @Override
    public Order veiwOrderById(Integer orderId) {
        for (Order order : allOrders) {
            if (order.getOrderId().equals(orderId)) {
                return order;
            }

        }
        return null;
    }

    @Override
    public int deleteOrder(Integer orderId) {


        for (int i = 0; i < allOrders.size(); i++) {
            if (allOrders.get(i).getOrderId().equals(orderId)) {
                allOrders.remove(i);
                return 1;
            }

        }
        return  0;
    }
    @Override
    public int editOrder(Order partialOrder) {
        for (Order order : allOrders) {
            if (order.getOrderId().equals(partialOrder.getOrderId())) {
                order.setQuantity(partialOrder.getQuantity());

                return 1;
            }
        }
        return -1;
    }
}
