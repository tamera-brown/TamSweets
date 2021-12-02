package com.tp.bakery.persistence;

import com.tp.bakery.model.User;


import java.util.List;

public interface UserDAO {
    List<User> getAllUsers();

    int deleteUser(Integer user_id);

    User getUserById(Integer user_id);

    int editUser(User user);

    User registerUser(User user);

    User loginUser(User user);
}
