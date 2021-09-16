package com.example.Java.dao;

import com.example.Java.model.Answer;
import com.example.Java.model.Question;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JDBCQuestionDAO implements QuestionDAO {

    private JdbcTemplate jdbcTemplate;

    public JDBCQuestionDAO(JdbcTemplate jdbcTemplate) {

        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Question> getListOfQuestions() {
        List<Question> questions = new ArrayList<>();
        String sql = "SELECT question_id, question, answer_id, answer, result FROM questions JOIN answers ON "
            + "questions.question_id = answers.question_id";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql);
        while (rows.next()) {
            Question question = mapQuestion(rows);
            questions.add(question);
        }
        return questions;
    }

    @Override
    public List<Answer> getAnswersByQuestionId(int questionId) {
        List<Answer> answers = new ArrayList<>();
        String sql = "SELECT question_id, question, answer_id, answer, result FROM questions JOIN answers ON "
                + "questions.question_id = answers.question_id WHERE questions.question_id = ?";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql, questionId);
        while (rows.next()) {
            Answer answer = new Answer();
            answer.setAnswerId(rows.getInt("answer_id"));
            answer.setAnswer(rows.getString("answer"));
            answer.setResult(rows.getBoolean("result"));
            answers.add(answer);
        }
        return answers;
    }

    private int getCorrectAnswerByQuestionId(int questionId) {
        String sql = "SELECT question_id, question, answer_id, answer, result FROM questions JOIN answers ON "
                + "questions.question_id = answers.question_id WHERE questions.question_id = ? AND result = true";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql, questionId);
        int correctAnswer = 0;
        if(rows.next()) {
            correctAnswer = rows.getInt("answer_id");
        }
        return correctAnswer;
    }

    private Question mapQuestion(SqlRowSet row) {
        Question question = new Question();
        question.setQuestionId(row.getInt("question_id"));
        question.setQuestion(row.getString("question"));
        question.setAnswersList(getAnswersByQuestionId(question.getQuestionId()));
        question.setCorrectAnswer(getCorrectAnswerByQuestionId(question.getQuestionId()));

        return question;
    }
}
