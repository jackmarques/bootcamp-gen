CREATE DATABASE db_rh;

USE db_rh;

CREATE TABLE tb_funcionarios(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    setor VARCHAR(255),
	salario DECIMAL(10,2) NOT NULL
);

INSERT INTO tb_funcionarios (nome, cpf, setor, salario) VALUES
("Ana Souza", "12345678901", "Financeiro", 3500.00),
("Carlos Lima", "23456789012", "TI", 5200.50),
("Mariana Oliveira", "34567890123", "Recursos Humanos", 4100.75),
("Pedro Santos", "45678901234", "Marketing", 2900.30),
("Juliana Costa", "56789012345", "Administrativo", 2900.30);

SELECT * FROM tb_funcionarios;
SELECT * FROM tb_funcionarios WHERE salario > 2000;
SELECT * FROM tb_funcionarios WHERE salario < 2000;

UPDATE tb_funcionarios SET salario = 1800.00 WHERE id = 3;
UPDATE tb_funcionarios SET salario = 1700.00 WHERE id = 4;
UPDATE tb_funcionarios SET salario = 1500.00 WHERE id = 5;
