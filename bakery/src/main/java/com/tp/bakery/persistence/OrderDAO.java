package com.tp.bakery.persistence;

import com.tp.bakery.execptions.NullDessertIdException;
import com.tp.bakery.model.Order;

import java.util.List;

public interface OrderDAO {

    List<Order> getAllOrders() throws NullDessertIdException;

    Order veiwOrderById(Integer orderId) throws NullDessertIdException;

    int deleteOrder(Integer orderId);

    int editOrder(Order partialOrder);
}
