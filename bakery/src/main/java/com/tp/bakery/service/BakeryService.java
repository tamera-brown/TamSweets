package com.tp.bakery.service;

import com.tp.bakery.execptions.*;
import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Menu;
import com.tp.bakery.model.Order;
import com.tp.bakery.persistence.DessertDAO;
import com.tp.bakery.persistence.MenuDAO;
import com.tp.bakery.persistence.OrderDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BakeryService {
    @Autowired
    DessertDAO Dessertdao;
    @Autowired
    MenuDAO Menudao;
    @Autowired
    OrderDAO Orderdao;

    public List<Dessert> getAllDesserts() {
        return Dessertdao.getAllDesserts();
    }

    public Dessert addDessert(Dessert dessert) throws NullDessertObjectException, NulllDessertNameException, NullDessertDescriptionException, NullDessertPriceException, NullDessertImageException, InvalidDessertPriceException, InvalidDessertNameException, InvalidDessertDescriptionException, InvalidDessertImageException {
        return Dessertdao.addDessert(dessert);

    }

    public Dessert getDessertById(Integer dessertId) throws NullDessertIdException, InvaildDessertIdException {
        return Dessertdao.getDessertById(dessertId);
    }


    public int editDessert( Dessert dessert) throws NullDessertIdException, NullDessertObjectException, NulllDessertNameException, NullDessertDescriptionException, NullDessertPriceException, NullDessertImageException {
        return Dessertdao.editDessert(dessert);
    }

    public int deleteDessert(Integer dessertId) throws NullDessertIdException, InvaildDessertIdException {
        return Dessertdao.deleteDessert(dessertId);
    }

    public void addDessertToMenu(Integer menuId, Integer dessertId) {
        Dessertdao.addDessertToMenu(menuId,dessertId);
    }
    public List<Menu> getAllMenus() {
        return Menudao.getAllMenus();
    }

    public Menu addMenu(Menu newMenu) {
        return Menudao.addMenu(newMenu);
    }

    public Menu viewMenusById(Integer menuId) {

        return Menudao.viewMenuById(menuId);
    }


    public int buyDessert(Integer dessertId, Order order) {
        return Dessertdao.buyDessert(dessertId,order);
    }

    public List<Order> getAllOrders() throws NullDessertIdException {
        return Orderdao.getAllOrders();
    }

    public Order viewOrderById(Integer orderId) throws NullDessertIdException {
        return Orderdao.veiwOrderById(orderId);
    }

    public int deleteOrder(Integer orderId) {
        return Orderdao.deleteOrder(orderId);
    }

    public int editOrder(Order partialOrder) {
        return Orderdao.editOrder(partialOrder);
    }

    public List<Dessert> getDessertByName(String dessertName) {
        return Dessertdao.getDessertByName(dessertName);
    }
}
