USE `carver-kahena-mansano-de-almeida`;
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

# 1.a. VARCHAR declara uma string, PRIMARY KEY informa a necessidade de uma chave, NOT NULL informa que o valor não pode ser nulo,

# FLOAT declara um número não inteiro e DATE a data.

SHOW DATABASES;
SHOW TABLES;

# 1.b. O comando SHOW DATABASES é utilizado caso você possua múltiplas bases de dados e deseja visualizar uma lista com os itens

# de cada base.

# E o SHOW TABLES é similar, utilizado caso você possua múltiplas tabelas dentro de um banco de dados e desejar ver uma lista de

# todos os itens contidos em cada tabela.

DESCRIBE Actor;

# 1.c. Descreve os tipo de dados contidos em uma tabela.

# 2.a.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000 ,
"1963-08-23",
"female"
);

# 2.b.

# Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

# O erro informa que a chave, que deve ser única, está duplicada.

INSERT INTO Actor (id, name, salary)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

# 2.c. Error Code: 1136. Column count doesn't match value count at row 1

# Colunas e valores não correspondem.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
400000,
"1949-04-18",
"male"
);

# 2.c. Error Code: 1364. Field 'name' doesn't have a default value

# Faltou o valor de nome, não aceita null.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
1979-03-26,
"female"
);

# 2.c. Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

# Faltou aspas no valor de birth_date

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

SELECT \* FROM Actor;

SELECT id, salary from Actor;

# 3.a.

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

# 3.b.

SELECT name, salary from Actor WHERE name = "Tony Ramos";

# 3.c.

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";

# Não retornou nenhum, pois todos tem esse valor.

# 3.d.

SELECT id, name, salary from Actor WHERE salary < 500000;

SELECT id, nome from Actor WHERE id = "002";

# Error Code: 1054. Unknown column 'nome' in 'field list'.

# A requisição está errada -> nome e o correto é NAME.

USE `carver-kahena-mansano-de-almeida`;
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

# 1.a. VARCHAR declara uma string, PRIMARY KEY informa a necessidade de uma chave, NOT NULL informa que o valor não pode ser nulo,

# FLOAT declara um número não inteiro e DATE a data.

SHOW DATABASES;
SHOW TABLES;

# 1.b. O comando SHOW DATABASES é utilizado caso você possua múltiplas bases de dados e deseja visualizar uma lista com os itens

# de cada base.

# E o SHOW TABLES é similar, utilizado caso você possua múltiplas tabelas dentro de um banco de dados e desejar ver uma lista de

# todos os itens contidos em cada tabela.

DESCRIBE Actor;

# 1.c. Descreve os tipo de dados contidos em uma tabela.

# 2.a.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000 ,
"1963-08-23",
"female"
);

# 2.b.

# Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

# O erro informa que a chave, que deve ser única, está duplicada.

INSERT INTO Actor (id, name, salary)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

# 2.c. Error Code: 1136. Column count doesn't match value count at row 1

# Colunas e valores não correspondem.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
400000,
"1949-04-18",
"male"
);

# 2.c. Error Code: 1364. Field 'name' doesn't have a default value

# Faltou o valor de nome, não aceita null.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
1979-03-26,
"female"
);

# 2.c. Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

# Faltou aspas no valor de birth_date

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

SELECT \* FROM Actor;

SELECT id, salary from Actor;

# 3.a.

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

# 3.b.

SELECT name, salary from Actor WHERE name = "Tony Ramos";

# 3.c.

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";

# Não retornou nenhum, pois todos tem esse valor.

# 3.d.

SELECT id, name, salary from Actor WHERE salary < 500000;

SELECT id, nome from Actor WHERE id = "002";

# Error Code: 1054. Unknown column 'nome' in 'field list'.

# A requisição está errada -> nome e o correto é NAME.
