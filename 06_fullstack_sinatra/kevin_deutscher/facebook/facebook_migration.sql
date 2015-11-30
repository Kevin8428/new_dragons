CREATE DATABASE facebook_datamart;
\c facebook_datamart;

CREATE TABLE users (id SERIAL PRIMARY KEY, password varchar(32), user_name varchar(32));

CREATE TABLE likes(id SERIAL PRIMARY KEY, like_date TIMESTAMP);

CREATE TABLE status_update(id SERIAL PRIMARY KEY, status_date TIMESTAMP, status_comment TEXT);

INSERT INTO users (password, user_name) VALUES ('user_one', 'pword_one');
INSERT INTO users (password, user_name) VALUES ('user_two', 'pword_two');
INSERT INTO users (password, user_name) VALUES ('user_three', 'pword_three');
INSERT INTO users (password, user_name) VALUES ('user_four', 'pword_four');
INSERT INTO users (password, user_name) VALUES ('user_five', 'pword_five');
INSERT INTO users (password, user_name) VALUES ('user_six', 'pword_six');
INSERT INTO users (password, user_name) VALUES ('user_seven', 'pword_seven');
INSERT INTO users (password, user_name) VALUES ('user_eight', 'pword_eight');
INSERT INTO users (password, user_name) VALUES ('user_nine', 'pword_nine');
INSERT INTO users (password, user_name) VALUES ('user_ten', 'pword_ten');

INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);
INSERT INTO likes (like_date) VALUES (CURRENT_TIMESTAMP);

INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');
INSERT INTO status_update (status_date, status_comment) VALUES (CURRENT_TIMESTAMP, 'comment_one');

\dt
