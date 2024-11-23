package com.tp.bakery.controller;

import com.tp.bakery.execptions.*;
import com.tp.bakery.model.*;
import com.tp.bakery.service.BakeryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")

public class DessertController {

    @Autowired
    BakeryService service;

@GetMapping("/desserts")
    public List<Dessert> getAllDesserts(){
        return service.getAllDesserts();
    }

    @GetMapping("/dessert/{dessertId}")
    public ResponseEntity getDessertById(@PathVariable Integer dessertId) {
        try {
            Dessert retrievedDessert = service.getDessertById(dessertId);
            return ResponseEntity.ok(retrievedDessert);
        } catch (NullDessertIdException | InvaildDessertIdException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @GetMapping("/dessert/name/{dessertName}")
    public ResponseEntity getDessertByName(@PathVariable String dessertName){
    List<Dessert> retrieveDessert=service.getDessertByName(dessertName);
    return ResponseEntity.ok(retrieveDessert);
    }

    @PostMapping("/addDessert")
    public ResponseEntity addDessert(@RequestBody Dessert dessert) {
        try {
            Dessert newDessert = service.addDessert(dessert);
           return ResponseEntity.ok(newDessert);

        } catch (NullDessertPriceException | NullDessertDescriptionException | NullDessertNameException | NullDessertObjectException | NullDessertImageException | InvalidDessertPriceException | InvalidDessertNameException | InvalidDessertDescriptionException | InvalidDessertImageException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }
    @PutMapping("/editDessert")
    public int editDessert(  @RequestBody Dessert dessert) {
        try {
            return service.editDessert(dessert);

        } catch (NullDessertIdException | NullDessertObjectException | NullDessertNameException | NullDessertDescriptionException | NullDessertPriceException | NullDessertImageException e) {
            return -1;
        }
    }
    @DeleteMapping("/deleteDessert/{dessertId}")
    public int deleteDessert(@PathVariable Integer dessertId) {
        try {
            return service.deleteDessert(dessertId);
        } catch (NullDessertIdException | InvaildDessertIdException e) {
            return -1;
        }
    }
    @PutMapping("/add/{menuId}/{dessertId}")
    public void addDessertToMenu(@PathVariable Integer menuId, @PathVariable Integer dessertId){
     service.addDessertToMenu(menuId,dessertId);
    }
    @PostMapping("/buy/{dessertId}")
    public int buyDessert(@PathVariable Integer dessertId, @RequestBody Order order){

        int bought=service.buyDessert(dessertId,order);
        return bought;

    }





}
