begin transaction;
rollback;

DROP table if exists answers;
DROP table if exists scores;
DROP table if exists users;
DROP table if exists questions;

CREATE table users (
    user_id serial primary key,
    user_name varchar(50)
);

CREATE table questions (
    question_id serial primary key,
    question text
);
CREATE table answers (
    answer_id serial primary key,
    question_id int not null,
    answer text,
    result boolean,
    constraint fk_answers_question foreign key (question_id) references questions (question_id)
);
CREATE table scores (
    score_id serial primary key,
    user_id int not null,
    score int,
    constraint fk_scores_users foreign key (user_id) references users (user_id)
);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'Which of the following is a primitive data type?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 1, 'boolean', true);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 1, 'Object', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 1, 'String', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 1, 'Array', false);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'The action of doing something over and over again, repeating code?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 2, 'Code', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 2, 'Program', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 2, 'Loop', true);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 2, 'Command', false);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'What is computer programming?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 3, 'List of functions', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 3, 'Telling a computer what to do', true);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 3, 'TV show', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 3, 'Radio show', false);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'Which of the following is a programming language?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 4, 'Java', true);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 4, 'Cobra', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 4, 'Byte', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 4, 'VS Code', false);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'What data type is "Hello World"?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 5, 'Text', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 5, 'Array', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 5, 'Quote', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 5, 'String', true);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'What is an algorithm?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 6, 'Questions for a machine', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 6, 'A user name', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 6, 'Brains for a robot', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 6, 'Instructions for a computer', true);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'What is pair programming?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 7, 'Programming alone', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 7, 'Programming with another developer', true);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 7, 'Working with two computers', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 7, 'Working on two projects at once', false);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'What two numbers are used in binary?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 8, '1 and 2', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 8, '5 and 10', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 8, '0 and 1', true);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 8, '2 and 10', false);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'What data type stores whole numbers?');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 9, 'Boolean', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 9, 'Float', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 9, 'Double', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 9, 'Integer', true);

INSERT INTO questions (question_id, question) VALUES (DEFAULT, 'Code is written in short steps. A series of these steps on code is called a ___.');
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 10, 'Script', true);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 10, 'Algorithm', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 10, 'Story', false);
INSERT INTO answers (answer_id, question_id, answer, result) VALUES (DEFAULT, 10, 'Text', false);

commit transaction;