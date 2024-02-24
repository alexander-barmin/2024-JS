CREATE TABLE IF NOT EXISTS customers
(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(128) NOT NULL,
    last_name VARCHAR(128) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders
(
    order_id SERIAL PRIMARY KEY,
    comment TEXT,
    customer_id INTEGER NOT NULL,
    Foreign Key (customer_id) REFERENCES customers(customer_id)
    
);

-- 'processing' -> Обрабатывается, 'inprogress' -> В работе, 'way' -> В пути, 'arrived' -> Пришло, 'issued' -> Выдано, 'refusal' -> Отказ, 'removed' -> Снят, 'return' -> Возврат
CREATE TYPE ORDER_STATE as enum('processing', 'inprogress', 'way', 'arrived', 'issued', 'refusal', 'removed', 'return');
CREATE TABLE IF NOT EXISTS orders_history
(
    record_id SERIAL PRIMARY KEY,
    date_time TIMESTAMP NOT NULL,
    order_state ORDER_STATE NOT NULL,
    order_id INTEGER NOT NULL,
    Foreign Key (order_id) REFERENCES orders(order_id)
);

CREATE TABLE IF NOT EXISTS products
(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC,
    availability BOOLEAN DEFAULT true,
    CONSTRAINT product_price_check CHECK(price > 0)
);

CREATE TABLE IF NOT EXISTS photos
(
    photo_id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    product_id INTEGER NOT NULL,
    Foreign Key (product_id) REFERENCES products(product_id)
);

CREATE TABLE IF NOT EXISTS orders_products
(
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    count INTEGER NOT NULL DEFAULT 1,
    price NUMERIC NOT NULL,
    Foreign Key (order_id) REFERENCES orders(order_id),
    Foreign Key (product_id) REFERENCES products(product_id)
);
