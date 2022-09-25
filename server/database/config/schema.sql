BEGIN;

DROP TABLE IF EXISTS users, products, cart CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  country VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  products_img TEXT,
  price INT NOT NULL, 
  category VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
);



CREATE TABLE cart(
  user_id int not null,
  product_id int not null,
  PRIMARY KEY(user_id, product_id),
  foreign key (product_id) references products(id) on delete cascade,
  foreign key (user_id) references users(id) on delete cascade
);



COMMIT;