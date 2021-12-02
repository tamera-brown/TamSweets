package com.tp.bakery.persistence;

import com.tp.bakery.model.User;
import com.tp.bakery.persistence.mappers.IntegerMapper;
import com.tp.bakery.persistence.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class PostgesUserDAO implements UserDAO {

    @Autowired
    JdbcTemplate template;


    @Override
    public List<User> getAllUsers() {
        List<User> allUsers=template.query("select user_id, \"firstName\", \"lastName\", email, user_name, password\n" +
                "\tfrom \"Users\";",new UserMapper());
        return allUsers;
    }

    @Override
    public int deleteUser(Integer user_id) {
        int deleted=template.update("delete from \"Users\"\n" +
                "\twhere \"user_id\"=?;",user_id);
        return deleted;
    }

    @Override
    public User getUserById(Integer user_id) {
        User retreived=template.queryForObject("select user_id, \"firstName\", \"lastName\", email, user_name, password\n" +
                "\tfrom \"Users\" where \"user_id=" + user_id + "\"",new UserMapper());
        return retreived;
    }

    @Override
    public int editUser(User user) {
        int edited=template.update("update \"Users\"\n" +
                " \"firstName\"=?, \"lastName\"=?, email=?, user_name=?, password=?;",
                user.getFirstName(), user.getLastName(), user.getEmail(), user.getUser_name(), user.getPassword());

        return edited;

    }

    @Override
    public User registerUser(User user) {
        Integer user_id = template.queryForObject("insert into \"Users\"(\n" +
                "\tuser_id, \"firstName\", \"lastName\", email, user_name, password)\n" +
                "\tvalues (?, ?, ?, ?, ?, ?) returning \"user_id\";",
                new IntegerMapper("user_id"),user.getFirstName(),user.getLastName(),user.getUser_name(),
                user.getEmail(),user.getPassword());

        user.setUser_id(user_id);


        return user;
    }

    @Override
    public User loginUser(User user) {
        User loggedIn=template.queryForObject("select user_id, \"firstName\", \"lastName\", email, user_name, password\n" +
                " from \"Users\" where \"user_name=?, \"password;=?;",new UserMapper());
        return loggedIn;
    }
}
