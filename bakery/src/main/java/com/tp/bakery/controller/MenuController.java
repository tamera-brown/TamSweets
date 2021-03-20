package com.tp.bakery.controller;

import com.tp.bakery.model.Menu;
import com.tp.bakery.service.BakeryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MenuController {

    @Autowired
    BakeryService service;

    @GetMapping("/menus")
    List<Menu> getAllMenus(){
        return service.getAllMenus();
    }
    @GetMapping("/menu/{menuId}")
    Menu viewMenuById(@PathVariable Integer menuId){
        return service.viewMenusById(menuId);

    }
    @PostMapping("/addMenu")
    public ResponseEntity addMenu(Menu newMenu){
        Menu menu= service.addMenu(newMenu);
        return ResponseEntity.ok(menu);
    }
    
}
