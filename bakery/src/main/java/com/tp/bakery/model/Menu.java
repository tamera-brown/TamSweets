package com.tp.bakery.model;

import java.util.ArrayList;
import java.util.List;

public class Menu {
    Integer menuId;
    String menuName;
    List<Dessert> DessertItems;

    public Menu(){}
    public Menu(Menu that){
        this.menuId= that.menuId;
        this.menuName= that.menuName;
        this.DessertItems=new ArrayList<>();
        for(Dessert toCopy : that.DessertItems){
                this.DessertItems.add(toCopy);
        }
    }

    public Integer getMenuId() {
        return menuId;
    }

    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public List<Dessert> getDessertItems() {
        return DessertItems;
    }

    public void setDessertItems(List<Dessert> dessertItems) {
        DessertItems = dessertItems;
    }
}
