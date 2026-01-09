CREATE DATABASE db_pizzaria_legal;
USE db_pizzaria_legal;

CREATE TABLE tb_categorias(
	id_categoria BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL
);
SELECT id_categoria, nome_categoria FROM tb_categorias;

CREATE TABLE tb_pizzas(
	id_pizza BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_pizza VARCHAR(255) NOT NULL,
    descricao_pizza VARCHAR(255), 
    preco_pizza DECIMAL(6,2) NOT NULL,
	tamanho_pizza VARCHAR(255) NOT NULL
);

ALTER TABLE tb_pizzas
ADD COLUMN id_categoria BIGINT NOT NULL,
ADD CONSTRAINT fk_pizzas_categorias
FOREIGN KEY (id_categoria)
REFERENCES tb_categorias(id_categoria);

INSERT INTO tb_categorias(nome_categoria, tipo) VALUES
("Tradicional", "Salgada"),
("Especial", "Salgada"),
("Premium", "Salgada"),
("Doce", "Doce"),
("Promocional", "Salgada");

INSERT INTO tb_pizzas (nome_pizza, descricao_pizza, preco_pizza, tamanho_pizza, id_categoria) VALUES
("Calabresa", "Calabresa fatiada, cebola e mussarela", 50.00, "Grande", 1),
("Marguerita", "Mussarela, tomate e manjericão", 42.00, "Média", 1),
("Frango com Catupiry", "Frango desfiado e catupiry", 48.00, "Grande", 2),
("Quatro Queijos", "Mussarela, parmesão, provolone e gorgonzola", 75.00, "Grande", 3),
("Pepperoni", "Pepperoni e mussarela", 49.00, "Média", 3),
("Chocolate", "Chocolate ao leite e granulado", 38.00, "Pequena", 4),
("Romeu e Julieta", "Goiabada e queijo", 40.00, "Média", 4),
("Pizza da Casa", "Ingredientes selecionados da casa", 60, "Grande", 5);

SELECT * FROM tb_pizzas WHERE preco_pizza > 45.00;
SELECT * FROM tb_pizzas WHERE preco_pizza BETWEEN 50.00 AND 100.00;
SELECT * FROM tb_pizzas WHERE nome_pizza LIKE "%m%";
SELECT * FROM tb_pizzas;

SELECT id_pizza, nome_pizza, descricao_pizza, preco_pizza, tamanho_pizza, tb_categorias.id_categoria, tb_categorias.nome_categoria, tb_categorias.tipo
FROM tb_pizzas INNER JOIN tb_categorias
ON tb_pizzas.id_categoria = tb_categorias.id_categoria;

SELECT id_pizza, nome_pizza, descricao_pizza, preco_pizza, tamanho_pizza, tb_categorias.id_categoria, tb_categorias.nome_categoria, tb_categorias.tipo
FROM tb_pizzas INNER JOIN tb_categorias
ON tb_pizzas.id_categoria = tb_categorias.id_categoria WHERE tb_categorias.tipo = "Doce";

