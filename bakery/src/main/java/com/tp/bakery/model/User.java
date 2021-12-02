package com.tp.bakery.model;

public class User {
    Integer user_id;
    String firstName;
    String lastName;
    String email;
    String user_name;
    String password;

public User(){}

public User(User that){
    this.user_id= that.user_id;
    this.firstName= that.firstName;
    this.lastName= that.lastName;
    this.email=that.email;
    this.user_name=that.user_name;
    this.password=that.password;
}

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}





