package com.tp.bakery.persistence;

import com.tp.bakery.execptions.NullDessertIdException;
import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Order;
import com.tp.bakery.persistence.mappers.DessertMapper;
import com.tp.bakery.persistence.mappers.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Profile({"Application","daoTesting"})
public class PostgresOrderDAO implements OrderDAO {

    @Autowired
    private JdbcTemplate template;


    @Override
    public List<Order> getAllOrders() throws NullDessertIdException {
        List<Order> orders = template.query("select \"orderId\",o.\"dessertId\",\"quantity\", dh.\"dessertName\",dh.\"dessertDescription\", dh.\"dessertPrice\", dh.\"dessertImg\",\n" +
                "sum(dh.\"dessertPrice\"* \"quantity\") as totalPrice\n" +
                "from \"Orders\" as o\n" +
                "join \"DessertsHelper\" as dh\n" +
                "on o.\"dessertId\"=dh.\"dessertId\"\n" +
                "group by o.\"orderId\",dh.\"dessertName\",dh.\"dessertDescription\",  dh.\"dessertPrice\", dh.\"dessertImg\" order by \"orderId\";", new OrderMapper());

        for(Order order :orders){
            order.setBagItem(getDessertById(order.getDessertId()));
        }
        return orders;
    }

    @Override
    public Order veiwOrderById(Integer orderId) throws NullDessertIdException {
        Order retrieved = template.queryForObject("select \"orderId\",o.\"dessertId\",\"quantity\", dh.\"dessertName\",dh.\"dessertDescription\", dh.\"dessertPrice\", dh.\"dessertImg\",\n" +
                "sum(dh.\"dessertPrice\"* \"quantity\") as totalPrice\n" +
                "from \"Orders\" as o\n" +
                "join \"DessertsHelper\" as dh\n" +
                "on o.\"dessertId\"=dh.\"dessertId\" and o.\"orderId\"= ?\n" +
                "group by o.\"orderId\",dh.\"dessertName\",dh.\"dessertDescription\",  dh.\"dessertPrice\", dh.\"dessertImg\"", new OrderMapper(), orderId);
        retrieved.setBagItem(getDessertById(retrieved.getDessertId()));
        return retrieved;
    }

    @Override
    public int deleteOrder(Integer orderId) {
        int deleted = template.update("delete from \"Orders\" where \"orderId\"=?;", orderId);
        return deleted;
    }

    @Override
    public int editOrder(Order partialOrder) {
        int edited= template.update("UPDATE \"Orders\"\n" +
                "\tSET  \"quantity\"=?\n" +
                "\tWHERE \"orderId\"=?;", partialOrder.getQuantity(),partialOrder.getOrderId());



        return edited;

    }

    public Dessert getDessertById(Integer dessertId) throws NullDessertIdException {
        if (dessertId == null) {
            throw new NullDessertIdException("Cannot get dessert with null Id");
        }

        Dessert retreived = template.queryForObject("select \"dessertId\", \"dessertName\", \"dessertDescription\", \"dessertPrice\", \"dessertImg\" from \"Desserts\" where \"dessertId\"='" + dessertId + "'", new DessertMapper());

        return retreived;

    }
}