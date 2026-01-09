CREATE DATABASE db_farmacia_bem_estar;
USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias(
	id_categoria BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL,
    setor VARCHAR(255) NOT NULL
);

CREATE TABLE tb_produtos(
	id_produto BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(255) NOT NULL,
    descricao_produto VARCHAR(255),
    preco_produto DECIMAL(6,2) NOT NULL,
    estoque INT NOT NULL
);

ALTER TABLE tb_produtos
ADD COLUMN id_categoria BIGINT NOT NULL,
ADD CONSTRAINT fk_produtos_categorias
FOREIGN KEY (id_categoria)
REFERENCES tb_categorias(id_categoria);

INSERT INTO tb_categorias (nome_categoria, setor) VALUES
("Medicamentos", "Saúde"),
("Cosméticos", "Beleza"),
("Higiene", "Cuidados Pessoais"),
("Suplementos", "Nutrição"),
("Infantil", "Cuidados Especiais");

INSERT INTO tb_produtos (nome_produto, descricao_produto, preco_produto, estoque, id_categoria) VALUES
("Dipirona", "Analgésico e antitérmico", 12.00, 100, 1),
("Paracetamol", "Analgésico comum", 10.00, 120, 1),
("Protetor Solar", "FPS 50", 65.00, 40, 2),
("Shampoo Anticaspa", "Controle de caspa", 28.00, 60, 3),
("Vitamina C", "Suplemento vitamínico", 55.00, 50, 4),
("Fralda Infantil", "Tamanho M", 70.00, 30, 5),
("Creme Hidratante", "Para pele seca", 45.00, 70, 2),
("Sabonete Líquido", "Uso diário", 18.00, 80, 3);

SELECT * FROM tb_produtos WHERE preco_produto > 50.00;
SELECT * FROM tb_produtos WHERE preco_produto BETWEEN 5.00 AND 60.00;
SELECT * FROM tb_produtos WHERE nome_produto LIKE "%C%";

SELECT id_produto, nome_produto, preco_produto, estoque, tb_categorias.id_categoria, tb_categorias.nome_categoria, tb_categorias.setor
FROM tb_produtos INNER JOIN tb_categorias
ON tb_produtos.id_categoria = tb_categorias.id_categoria;

SELECT id_produto, nome_produto, preco_produto, estoque, tb_categorias.id_categoria, tb_categorias.nome_categoria, tb_categorias.setor
FROM tb_produtos INNER JOIN tb_categorias
ON tb_produtos.id_categoria = tb_categorias.id_categoria WHERE tb_categorias.id_categoria = 2;



