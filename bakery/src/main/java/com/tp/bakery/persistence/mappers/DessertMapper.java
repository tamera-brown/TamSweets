package com.tp.bakery.persistence.mappers;

import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Menu;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

 public class DessertMapper implements RowMapper<Dessert> {

        @Override
        public Dessert mapRow(ResultSet resultSet, int i) throws SQLException {
            Dessert mappedDessert = new Dessert();
            mappedDessert.setDessertId( resultSet.getInt("dessertId") );
            mappedDessert.setName( resultSet.getString( "dessertName") );
            mappedDessert.setDescription(resultSet.getString("dessertDescription"));
            mappedDessert.setPrice(resultSet.getDouble("dessertPrice"));
            mappedDessert.setImage(resultSet.getString("dessertImg"));


            return mappedDessert;
        }
    }

