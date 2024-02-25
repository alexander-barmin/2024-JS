-- initialize the database with test data
-- init customers table
INSERT INTO customers(first_name, last_name, phone, email, address) VALUES ('Alexander', 'Ivanov', '+7(910)777-55-11', 'a.ivanov@mail.ru', 'Sarov, Zhasmmnovaya, 11');
INSERT INTO customers(first_name, last_name, phone, email, address) VALUES ('Alexander', 'Petrov', '+7(910)777-55-22', 'a.petrov@mail.ru', 'Sarov, Zhasmmnovaya, 22');
INSERT INTO customers(first_name, last_name, phone, email, address) VALUES ('Alexander', 'Sidorov', '+7(910)777-55-33', 'a.sidorov@mail.ru', 'Sarov, Zhasmmnovaya, 33');

-- init orders table
INSERT INTO orders(comment, customer_id) VALUES ('Test order for Alexander Ivanov', '1');
INSERT INTO orders(comment, customer_id) VALUES ('Test order for Alexander Sidorov', '3');
-- init orders_history table
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'processing', '1');
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'inprogress', '1');
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'way', '1');
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'arrived', '1');
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'issued', '1');
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'refusal', '1');
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'removed', '1');
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'return', '1');

INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'processing', '2');
INSERT INTO orders_history(date_time, order_state, order_id) VALUES (now(), 'inprogress', '2');
-- init products table
INSERT INTO products(name, description, price) VALUES ('prod1','prod1 description', 100);
INSERT INTO products(name, description, price) VALUES ('prod2','prod2 description', 200);
INSERT INTO products(name, description, price) VALUES ('prod3','prod3 description', 300);
-- init photos table
INSERT INTO photos(url, product_id) VALUES ('https://ru.pinterest.com/prod1_image1.png','1');

INSERT INTO photos(url, product_id) VALUES ('https://ru.pinterest.com/prod2_image1.png','2');
INSERT INTO photos(url, product_id) VALUES ('https://ru.pinterest.com/prod2_image2.png','2');
-- init orders_history table
INSERT INTO orders_products(order_id, product_id, count, price) VALUES ('1','1', '5', 100);
INSERT INTO orders_products(order_id, product_id, count, price) VALUES ('1','2', '1', 200);

INSERT INTO orders_products(order_id, product_id, count, price) VALUES ('2','3', '5', 300);

