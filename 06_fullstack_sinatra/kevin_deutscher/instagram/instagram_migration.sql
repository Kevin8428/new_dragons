CREATE DATABASE instagram_datamart;
\c instagram_datamart;

CREATE TABLE users (id SERIAL PRIMARY KEY, password varchar(32), user_name varchar(32));

CREATE TABLE photos(id SERIAL PRIMARY KEY, comment TEXT, photo_date TIMESTAMP);

CREATE TABLE hashtags(id SERIAL PRIMARY KEY);

\dt
