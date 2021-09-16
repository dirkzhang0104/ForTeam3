package com.example.Java.dao;

import com.example.Java.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JDBCUserDAO implements UserDao {

    private JdbcTemplate jdbcTemplate;


    public JDBCUserDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<User> retrieveAllUsers() {
        List<User> users = new ArrayList<>();
        String sql = "SELECT users.user_id AS user_id, user_name, score_id, score " +
                "FROM users LEFT JOIN scores ON users.user_id = scores.user_id";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql);
        while(rows.next()) {
            User user = mapUser(rows);
            users.add(user);
        }
        return users;
    }

    @Override
    public User getScoreByName(String name) {
        String sql = "SELECT users.user_id, user_name, score_id, score FROM users JOIN scores ON " +
                "users.user_id = scores.user_id WHERE user_name = ?";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql, name);
        User user = null;
       if(rows.next()) {
           user = mapUser(rows);
       }
        return user;
    }

    @Override
    public void addUser(User user) {
        String sql = "INSERT INTO users (user_name) VALUES (?)";
        jdbcTemplate.update(sql, user.getUserName());
    }

    private User mapUser(SqlRowSet row) {
        User user = new User();
        user.setUserId(row.getInt("user_id"));
        user.setUserName(row.getString("user_name"));
        user.setScoreId(row.getInt("score_id"));
        user.setScore(row.getInt("score"));
        return user;
    }
}
