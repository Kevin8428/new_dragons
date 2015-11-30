CREATE DATABASE twitter_datamart;
\c twitter_datamart;

CREATE TABLE users (id SERIAL PRIMARY KEY, name varchar(255), password varchar(255), email varchar(255));

CREATE TABLE tweets(id SERIAL PRIMARY KEY, user_id integer, tweet varchar(140));

CREATE TABLE targeted_ads(id SERIAL PRIMARY KEY, ad_name TEXT, ad_text TEXT, total_unique_views INTEGER);

CREATE TABLE emoji(id SERIAL PRIMARY KEY, emoji_name TEXT, emoji_value TEXT, total_uses_of_all_time INTEGER, is_enabled BOOLEAN);
