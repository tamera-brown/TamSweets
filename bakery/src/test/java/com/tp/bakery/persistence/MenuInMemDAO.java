package com.tp.bakery.persistence;

import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Menu;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
@Profile("ServiceTesting")
public class MenuInMemDAO implements MenuDAO {

    private List<Menu> allMenus = new ArrayList<>();

    @Override
    public List<Menu> getAllMenus() {
        List<Menu> copy = new ArrayList<>();
        for (Menu copies : allMenus) {
            copy.add(new Menu(copies));
        }
        return allMenus;

    }

    @Override
    public Menu addMenu(Menu newMenu) {
        Integer id = 0;

        for (Menu toCheck : allMenus) {
            if (toCheck.getMenuId() > id) {
                id = toCheck.getMenuId();
            }
        }
        id++;

        Menu copy = new Menu(newMenu);
        copy.setMenuId(id);
        allMenus.add(copy);


        return copy;


    }

    @Override
    public Menu viewMenuById(Integer menuId) {
        for (Menu menu : allMenus) {
            if (menu.getMenuId().equals(menuId)) {
                return menu;
            }
        }
        return null;
    }
}
