package com.tp.bakery.persistence;


import com.tp.bakery.execptions.*;
import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Order;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@Profile("ServiceTesting")
public class DessertInMemDAO implements DessertDAO {

    private List<Dessert> allDesserts = new ArrayList<>();

    @Override
    public List<Dessert> getAllDesserts() {
        List<Dessert> copy = new ArrayList<>();
        for (Dessert copies : allDesserts) {
            copy.add(new Dessert(copies));
        }
        return allDesserts;
    }

    @Override
    public Dessert addDessert(Dessert dessert) throws NullDessertObjectException, NulllDessertNameException, NullDessertDescriptionException, InvalidDessertPriceException, InvalidDessertNameException, InvalidDessertDescriptionException, InvalidDessertImageException{
        Integer id = 0;
        if (dessert == null) {
            throw new NullDessertObjectException("Cannot add null dessert object");
        }
        if (dessert.getName() == null) {
            throw new NulllDessertNameException("Cannot add dessert with null name");
        }
        if (dessert.getDescription() == null) {
            throw new NullDessertDescriptionException("Cannot add a dessert with null description");
        }
        if(dessert.getPrice()<=0){
            throw new InvalidDessertPriceException("Cannot add a dessert with 0 or negative price");
        }
        if(dessert.getName().equals("")){
            throw  new InvalidDessertNameException("Cannot add dessert with empty name");
        }
        if(dessert.getDescription().equals("")){
            throw  new InvalidDessertDescriptionException("Cannot add dessert with empty description");
        }
        if(dessert.getImage().equals("")){
            throw new InvalidDessertImageException("Cannot add dessert with empty image");
        }


        for(Dessert toCheck : allDesserts){
            if(toCheck.getDessertId()>id){
                id=toCheck.getDessertId();
            }
        }
        id++;

        Dessert copy=new Dessert(dessert);
        copy.setDessertId(id);
        allDesserts.add(copy);


        return copy;


    }

    @Override
    public Dessert getDessertById(Integer dessertId) throws NullDessertIdException, InvaildDessertIdException {
        if (dessertId == null) {
            throw new NullDessertIdException("No Dessert with null id");

        }
        for (Dessert dessert : allDesserts) {
            if (dessert.getDessertId().equals(dessertId)) {
                return dessert;
            }
        }
        throw new InvaildDessertIdException("No Dessert with id " + dessertId);
    }

    @Override
    public int editDessert( Dessert editDessert) {

        for (Dessert dessert : allDesserts) {
            if (dessert.getDessertId().equals(editDessert.getDessertId())) {
                dessert.setName(editDessert.getName());
                dessert.setDescription(editDessert.getDescription());
                dessert.setPrice(editDessert.getPrice());
                dessert.setImage(editDessert.getImage());

                return 1;
            }
        }
        return -1;
    }
    @Override
    public int deleteDessert(Integer dessertId) throws NullDessertIdException, InvaildDessertIdException {
        if(dessertId==null){
            throw new NullDessertIdException("Cannot delete with null book id");
        }
        for(int i=0; i<allDesserts.size();i++){
            if(allDesserts.get(i).getDessertId().equals(dessertId)){
                allDesserts.remove(i);
                return 1;
            }
        }
        throw new InvaildDessertIdException("Cannot delete dessert with id " + dessertId);
    }


    @Override
    public void addDessertToMenu(Integer menuId, Integer dessertId) {

    }

    @Override
    public int buyDessert(Integer dessertId, Order order) {
        return 0;
    }

    @Override
    public List<Dessert> getDessertByName(String dessertName) {
        return null;
    }
}
