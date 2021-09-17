package com.example.Java.controller;

import com.example.Java.dao.QuestionDAO;
import com.example.Java.dao.UserDao;
import com.example.Java.model.Question;
import com.example.Java.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class GameController {

    private UserDao userDao;
    private QuestionDAO questionDAO;

    public GameController(UserDao userDao, QuestionDAO questionDAO) {
        this.userDao = userDao;
        this.questionDAO = questionDAO;
    }

    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public List<User> getUsers() {
        return userDao.retrieveAllUsers();
    }

    @RequestMapping(path = "/users", method = RequestMethod.POST)
    public void addUser(@RequestBody User user) {
        userDao.addUser(user);
    }

    @RequestMapping(path = "/questions", method = RequestMethod.GET)
    public List<Question> getQuestions() {
        return questionDAO.getListOfQuestions();
    }
}


