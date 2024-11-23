package com.tp.bakery.persistence;

import com.tp.bakery.execptions.*;
import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Order;
import com.tp.bakery.persistence.mappers.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Profile({"Application","daoTesting"})
public class PostgresDessertDAO implements DessertDAO {

    @Autowired
    private JdbcTemplate template;

    @Override
    public List<Dessert> getAllDesserts() {

        List<Dessert> allDesserts = template.query("select \"dessertId\",\"dessertName\",\"dessertDescription\", \"dessertPrice\",\"dessertImg\" from \"Desserts\" order by \"dessertId\" desc;", new DessertMapper());
        return allDesserts;
    }

    @Override
    public Dessert addDessert(Dessert dessert) throws NullDessertObjectException, NullDessertNameException, NullDessertDescriptionException, NullDessertPriceException, NullDessertImageException, InvalidDessertPriceException {
        if (dessert == null) {
            throw new NullDessertObjectException("Cannot add null dessert object");
        }
        if (dessert.getName() == null) {
            throw new NullDessertNameException("Cannot add dessert with null name");
        }
        if (dessert.getDescription() == null) {
            throw new NullDessertDescriptionException("Cannot add a dessert with null description");
        }
        if (dessert.getPrice() == null) {
            throw new NullDessertPriceException("Cannot add a dessert with null price");
        }
        if (dessert.getImage() == null) {
            throw new NullDessertImageException("Cannot add a dessert with null image");
        }
        if (dessert.getPrice() < 0) {
            throw new InvalidDessertPriceException("Cannot add dessert with 0 price");
        }
        Integer dessertId = template.queryForObject("insert into \"Desserts\" (\"dessertName\",\"dessertDescription\",\"dessertPrice\",\"dessertImg\") values(?,?,?,?) returning \"dessertId\";\n" +
                "\n", new IntegerMapper("dessertId"), dessert.getName(), dessert.getDescription(), dessert.getPrice(), dessert.getImage());

        dessert.setDessertId(dessertId);


        return dessert;
    }

    @Override
    public Dessert getDessertById(Integer dessertId) throws NullDessertIdException {
        if (dessertId == null) {
            throw new NullDessertIdException("Cannot get dessert with null Id");
        }

        Dessert retreived = template.queryForObject("select \"dessertId\", \"dessertName\", \"dessertDescription\", \"dessertPrice\", \"dessertImg\" from \"Desserts\" where \"dessertId\"='" + dessertId + "'", new DessertMapper());

        return retreived;

    }

    @Override
    public int editDessert(Dessert editdessert) throws NullDessertIdException, NullDessertObjectException, NullDessertDescriptionException, NullDessertNameException, NullDessertPriceException, NullDessertImageException {

        if (editdessert == null) {
            throw new NullDessertObjectException("Cannot edit dessert with null dessert");
        }
        if (editdessert.getDessertId() == null) {
            throw new NullDessertIdException("Cannot edit dessert with null id");
        }
        if (editdessert.getDescription() == null) {
            throw new NullDessertDescriptionException("Cannot edit dessert with null description");
        }
        if (editdessert.getName() == null) {
            throw new NullDessertNameException("Cannot edit dessert with null name");
        }
        if (editdessert.getPrice() == null) {
            throw new NullDessertPriceException("Cannot edit dessert with null price");
        }
        if (editdessert.getImage() == null) {
            throw new NullDessertImageException("Cannot edit a dessert with null image");
        }
        int edited = template.update("update \"Desserts\"\n" +
                        "set \"dessertName\"=?, \"dessertDescription\"=?, \"dessertPrice\"=?, \"dessertImg\"=? \n" +
                        "where \"dessertId\"=?;",

                editdessert.getName(), editdessert.getDescription(),
                editdessert.getPrice(), editdessert.getImage(), editdessert.getDessertId());

        return edited;

    }

    @Override
    public int deleteDessert(Integer dessertId) throws NullDessertIdException {
        if (dessertId == null) {
            throw new NullDessertIdException("Cannot delete dessert with null id");
        }
        template.update("delete from \"DessertMenus\" where \"dessertId\"=?;", dessertId);
        template.update("delete from \"Orders\" where \"dessertId\"=?;", dessertId);
        int deleted = template.update("delete from \"Desserts\" where \"dessertId\"=?;", dessertId);


        return deleted;


    }

    @Override
    public void addDessertToMenu(Integer menuId, Integer dessertId) {
        template.update("insert into \"DessertMenus\"(\"menuId\",\"dessertId\")\n" +
                "select \"menuId\",\"dessertId\" from \"DessertsHelper\"\n" +
                "\n");
    }

    @Override
    public int buyDessert(Integer dessertId, Order order) {
        Integer orderId = template.queryForObject("INSERT INTO \"Orders\"(\n" +
                "\t \"dessertId\", quantity)\n" +
                "\tVALUES (?, ?) returning \"orderId\";", new IntegerMapper("orderId"), dessertId, order.getQuantity());

        return orderId;

    }



    @Override
    public List<Dessert> getDessertByName(String dessertName) {
        List<Dessert> retrieved=template.query("select \"dessertId\" , \"dessertName\", \"dessertPrice\", \"dessertImg\", \"dessertDescription\" from \"Desserts\"\n" +
                "where \"dessertName\" like '%"+dessertName+"%';",new DessertMapper());
        return retrieved;
    }


}



