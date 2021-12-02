package com.tp.bakery.service;


import com.tp.bakery.model.User;
import com.tp.bakery.persistence.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserDAO userDAO;


    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    public int deleteUser(Integer user_id) {
        return userDAO.deleteUser(user_id);
    }

    public User getUserById(Integer user_id) {
        return userDAO.getUserById(user_id);
    }

    public int editUser(User user) {
        return userDAO.editUser(user);
    }

    public User registerUser(User user) {
        return userDAO.registerUser(user);
    }

    public User loginUser(User user) {
        return userDAO.loginUser(user);
    }
}
