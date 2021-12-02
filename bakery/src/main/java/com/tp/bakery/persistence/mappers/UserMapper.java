package com.tp.bakery.persistence.mappers;

import com.tp.bakery.model.Order;
import com.tp.bakery.model.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet resultSet, int i) throws SQLException {
        User mappedOrder=new User();
        mappedOrder.setUser_id(resultSet.getInt("user_id"));
        mappedOrder.setFirstName(resultSet.getString("firstName"));
        mappedOrder.setLastName(resultSet.getString("lastName"));
        mappedOrder.setEmail(resultSet.getString("email"));
        mappedOrder.setPassword(resultSet.getString("password"));


        return mappedOrder;
    }
}
