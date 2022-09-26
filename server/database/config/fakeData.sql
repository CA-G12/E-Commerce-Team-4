BEGIN;

INSERT INTO
  users (username, name, email, country, address, password)
VALUES
  ('bas123', 'Basel Sheikh', 'hello@hello.com', 'Palestine', 'Gaza - Palestine', '$2a$12$AYW71oJcIUSssAmYczxpoOQpcyDFKlu/Vhy0WgC7lGfkFL8UoDY5S'), -- ? Root!123
  ('mos456', 'Mostafa Baloush', 'hi@hi.com', 'Jordan', 'Amman - Jordan', '$2a$12$AYW71oJcIUSssAmYczxpoOQpcyDFKlu/Vhy0WgC7lGfkFL8UoDY5S'); -- ? Hi@123

INSERT INTO 
  products (name, product_img, price, category, description)
VALUES 
  ('product1', 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 30, 'mobile','mobile discription' ),
  ('product2','https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 50, 'watch','watch discription' ),
  ('product3','https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 800, 'laptop','watch discription' ),
  ('product4','https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1000, 'laptop','laptop discription' );

INSERT INTO 
  cart (user_id, product_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (2, 4);

COMMIT;