begin transaction;
rollback;
DROP table if exists answers;
DROP table if exists scores;
DROP table if exists users;
DROP table if exists questions;

CREATE table users(
    user_id serial primary key,
    user_name varchar(50)
);

CREATE table questions(
    question_id serial primary key,
    question text

);
CREATE table answers(
    answer_id serial primary key,
    question_id int not null,
    answer text,
    result boolean,
    constraint fk_answers_question foreign key (question_id) references questions (question_id)
);
CREATE table scores(
    score_id serial primary key,
    user_id int not null,
    score int,
    constraint fk_scores_users foreign key (user_id) references users(user_id)
);
commit transaction;