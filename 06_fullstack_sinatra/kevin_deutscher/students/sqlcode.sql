CREATE DATABASE popular_things;
\c popular_things

CREATE TABLE things (id SERIAL PRIMARY KEY, name TEXT);
INSERT INTO things (name) VALUES ('kevin');
