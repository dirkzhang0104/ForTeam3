package com.example.Java.dao;

import com.example.Java.model.User;

import java.util.List;

public interface UserDao {
    List<User> retrieveAllUsers();
    User getScoreByName(String name);
    void addUser(User user);
}
