package com.tp.bakery.persistence;

import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Menu;
import com.tp.bakery.persistence.mappers.DessertMapper;
import com.tp.bakery.persistence.mappers.IntegerMapper;
import com.tp.bakery.persistence.mappers.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Profile({"Application","daoTesting"})
public class PostgresMenuDAO implements MenuDAO {

    @Autowired
    private JdbcTemplate template;


    @Override
    public List<Menu> getAllMenus() {
        List<Menu> allMenus=template.query("select \"menuId\",\"menuName\" from \"Menus\";",new MenuMapper());

        for(Menu menu : allMenus){
            menu.setDessertItems(getDessertsBymenuId(menu.getMenuId()));
        }
        return allMenus;
    }

    @Override
    public Menu addMenu(Menu newMenu) {
        Integer menuId=template.queryForObject("insert into \"Menus\"(\"menuName\")\n" +
                "values (?) returning \"menuId\";",new IntegerMapper("menuId"),newMenu.getMenuName());
        newMenu.setMenuId(menuId);
        return newMenu;
    }

    @Override
    public Menu viewMenuById(Integer menuId) {
        Menu retrieved= template.queryForObject("select \"menuId\",\"menuName\" from \"Menus\" where \"menuId\"="+menuId+";\n",new MenuMapper());
        retrieved.setDessertItems(getDessertsBymenuId(menuId));
        return retrieved;
    }

    private List<Dessert> getDessertsBymenuId(Integer menuId) {
        List<Dessert> allDessertsinMenu=template.query("select \"dessertId\",\"dessertName\", \"dessertDescription\",\"dessertPrice\",\"dessertImg\" from \"DessertsHelper\"\n" +
                "where \"menuId\"='"+menuId+"'", new DessertMapper());
        return allDessertsinMenu;
    }
}
