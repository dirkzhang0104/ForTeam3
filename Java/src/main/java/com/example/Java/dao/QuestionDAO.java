package com.example.Java.dao;

import com.example.Java.model.Answer;
import com.example.Java.model.Question;

import java.util.List;

public interface QuestionDAO {

    List<Question> getListOfQuestions();
    List<Answer> getAnswersByQuestionId(int questionId);

}
