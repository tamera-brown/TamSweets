package com.tp.bakery.controller;


import com.tp.bakery.execptions.*;
import com.tp.bakery.model.Dessert;
import com.tp.bakery.model.Order;
import com.tp.bakery.model.User;
import com.tp.bakery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService service;

    @GetMapping("/")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{user_id}")
    User getUserById(@PathVariable Integer user_id) {
        return service.getUserById(user_id);
    }

    @PutMapping("/editUser")
    public int editUser(@RequestBody User user) {
        return service.editUser(user);
    }

    @DeleteMapping("/deleteUser/{user_id}")
    public int deleteUser(@PathVariable Integer user_id) {
        return service.deleteUser(user_id);
    }
    @PostMapping("/register")
    public ResponseEntity registerUser(User user){
        User newUser= service.registerUser(user);
        return ResponseEntity.ok(newUser);
    }
    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody User user){
        User loggedinUser=service.loginUser(user);
        return ResponseEntity.ok(loggedinUser);
    }
}
