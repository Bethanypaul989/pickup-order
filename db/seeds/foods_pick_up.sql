INSERT INTO foods (food_name, price, in_stock, wait_time, description, quantity, category) VALUES
('Spaghetti Bolognese', 12.99, 50, 15, 'Classic pasta dish with tomato sauce and ground beef', 10, 'Pasta'),
('Margherita Pizza', 9.99, 30, 10, 'Pizza with tomato sauce, mozzarella cheese and basil', 8, 'Pizza'),
('Grilled Chicken Salad', 8.49, 20, 5, 'Salad with grilled chicken, mixed greens, and vegetables', 5, 'Salad'),
('Beef Burger', 7.99, 40, 12, 'Juicy beef patty with lettuce, tomato and cheese', 15, 'Burger'),
('Fish and Chips', 10.99, 25, 20, 'Classic British dish with battered fish and fries', 12, 'Seafood');


INSERT INTO customers (full_name, email, password, phone_number, payment_method) VALUES
('John Smith', 'johnsmith@example.com', 'password123', '1234567890', 'Credit Card'),
('Jane Doe', 'janedoe@example.com', 'qwerty456', '9876543210', 'Paypal'),
('Bob Johnson', 'bjohnson@example.com', 'letmein789', '555-555-5555', 'Venmo');


INSERT INTO orders (quantity, price, food_id, customer_id) VALUES
(2, 25.98, 1, 1),
(1, 9.99, 2, 2),
(3, 24.45, 4, 3);


INSERT INTO favourites (customer_id, food_id) VALUES
(1, 1),
(1, 4),
(2, 2),
(3, 5);

INSERT INTO shopping_cart_items (food_id, customer_id, order_id, quantity_item) VALUES
(1, 1, NULL, 2),
(3, 2, NULL, 1),
(5, 3, NULL, 3);
