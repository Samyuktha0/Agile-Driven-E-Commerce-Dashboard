CREATE TABLE order (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product VARCHAR(255),
    quantity INT,
    price DOUBLE,
    status VARCHAR(50)
);
