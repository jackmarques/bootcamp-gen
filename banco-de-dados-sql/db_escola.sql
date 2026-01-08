CREATE DATABASE db_escola;
USE db_escola;

CREATE TABLE tb_estudantes(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    nota DOUBLE(3,1),
    curso VARCHAR(255) NOT NULL,
    ativo BOOLEAN NOT NULL
);

SELECT * FROM tb_estudantes;

INSERT INTO tb_estudantes(nome, nota, curso, ativo) VALUES
("Indio", 9.5, "JavaScript", 1);

SELECT * FROM tb_estudantes WHERE nota > 7.0;
SELECT * FROM tb_estudantes WHERE nota < 7.0;

SELECT AVG(nota) AS "Média da notas" FROM tb_estudantes;
SELECT SUM(nota) AS "Soma da notas" FROM tb_estudantes;
SELECT MAX(nota) AS "Nota mais alta" FROM tb_estudantes;

UPDATE tb_estudantes SET ativo = 0 WHERE id = 1;

SELECT * FROM tb_estudantes ORDER BY curso ASC, nota DESC;