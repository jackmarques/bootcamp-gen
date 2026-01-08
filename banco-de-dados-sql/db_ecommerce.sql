CREATE DATABASE db_ecommerce;

USE db_ecommerce;

CREATE TABLE tb_produtos(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL
);

INSERT INTO tb_produtos (nome, descricao, preco, quantidade) VALUES
("Notebook", "Notebook 15 polegadas, Intel i5, 8GB RAM, 256GB SSD", 3899.90, 12),
("Smartphone", "Tela 6.4 polegadas, 128GB, câmera tripla", 2199.99, 30),
("Fone de Ouvido Bluetooth", "Fone sem fio com cancelamento de ruído", 199.90, 45),
("Mouse", "Mouse óptico bluetooth", 99.90, 60),
("Teclado", "Teclado mecânico RGB com switch blue", 149.90, 25),
("Monitor", "Monitor Full HD 24 polegadas", 499.90, 18),
("Cadeira Gamer", "Cadeira ergonômica com ajuste de altura", 1299.00, 10),
("HD Externo 1TB", "Armazenamento portátil USB 3.0", 379.90, 40);

SELECT * FROM tb_produtos WHERE preco > 500.00;
SELECT * FROM tb_produtos WHERE preco < 500.00;

UPDATE tb_produtos SET quantidade = 20 WHERE id = 1;

SELECT * FROM tb_produtos;
