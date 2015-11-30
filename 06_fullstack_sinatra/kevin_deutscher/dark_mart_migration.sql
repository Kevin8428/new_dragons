CREATE DATABASE super_dark_mart;
\c super_dark_mart
CREATE TABLE services (id SERIAL PRIMARY KEY, name TEXT, available BOOLEAN);
CREATE TABLE products (id SERIAL PRIMARY KEY, name TEXT, available BOOLEAN);
\dt
SELECT * FROM services;
SELECT * FROM products;
