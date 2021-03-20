package com.tp.bakery.persistence;

import com.tp.bakery.execptions.*;
import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Order;

import java.util.List;

public interface DessertDAO {
    List<Dessert> getAllDesserts();

    Dessert addDessert(Dessert dessert) throws NullDessertObjectException, NulllDessertNameException, NullDessertDescriptionException,NullDessertPriceException, NullDessertImageException, InvalidDessertPriceException, InvalidDessertNameException, InvalidDessertDescriptionException, InvalidDessertImageException;

    Dessert getDessertById(Integer dessertId) throws NullDessertIdException, InvaildDessertIdException;

    int editDessert( Dessert editDessert) throws NullDessertIdException, NullDessertObjectException, NulllDessertNameException, NullDessertDescriptionException, NullDessertPriceException, NullDessertImageException;

    int deleteDessert(Integer dessertId) throws NullDessertIdException, InvaildDessertIdException;


    void addDessertToMenu(Integer menuId, Integer dessertId);

    int buyDessert(Integer dessertId, Order order);

    List<Dessert> getDessertByName(String dessertName);
}
