package com.example.Java.model;

import java.util.List;

public class Questions {
    private int questionId;
    private String question;
    private List<String> answersList;
    private int correctAnswer;

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public List<String> getAnswersList() {
        return answersList;
    }

    public void setAnswersList(List<String> answersList) {
        this.answersList = answersList;
    }

    public int getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(int correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
}
