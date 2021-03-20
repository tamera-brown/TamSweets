package com.tp.bakery.persistence.mappers;

import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Order;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OrderMapper implements RowMapper<Order> {
    @Override
    public Order mapRow(ResultSet resultSet, int i) throws SQLException {

        Order mappedOrder=new Order();
        mappedOrder.setOrderId(resultSet.getInt("orderId"));
        mappedOrder.setDessertId(resultSet.getInt("dessertId"));
        mappedOrder.setQuantity(resultSet.getInt("quantity"));
        mappedOrder.setTotalPrice(resultSet.getDouble("totalprice"));


        return mappedOrder;
    }
}
