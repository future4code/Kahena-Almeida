```sql
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
```

## 1.a.

> VARCHAR declara uma string, PRIMARY KEY informa a necessidade de uma chave, NOT NULL informa que o valor não pode ser nulo, FLOAT declara um número não inteiro e DATE a data.

```sql
SHOW DATABASES;
SHOW TABLES;
```

## 1.b.

> O comando SHOW DATABASES é utilizado caso você possua múltiplas bases de dados e deseja visualizar uma lista com os itens de cada base.

> E o SHOW TABLES é similar, utilizado caso você possua múltiplas tabelas dentro de um banco de dados e desejar ver uma lista de todos os itens contidos em cada tabela.

```sql
DESCRIBE Actor;
```

## 1.c.

> Descreve os tipo de dados contidos em uma tabela.

## 2.a.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);
```

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000 ,
"1963-08-23",
"female"
);
```

## 2.b.

> Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

O erro informa que a chave, que deve ser única, está duplicada.

```sql
INSERT INTO Actor (id, name, salary)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
```

## 2.c.

> Error Code: 1136. Column count doesn't match value count at row 1

Colunas e valores não correspondem.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
400000,
"1949-04-18",
"male"
);
```

## 2.c.

> Error Code: 1364. Field 'name' doesn't have a default value

Faltou o valor de nome, não aceita null.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
1979-03-26,
"female"
);
```

## 2.c.

> Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

Faltou aspas no valor de birth_date

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
```

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);
```

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);
```

```sql
SELECT \* FROM Actor;
SELECT id, salary from Actor;
```

## 3.a.

```sql
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";
```

## 3.b.

```sql
SELECT name, salary from Actor WHERE name = "Tony Ramos";
```

## 3.c.

```sql
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";
```

Não retornou nenhum, pois todos tem esse valor.

## 3.d.

```sql
SELECT id, name, salary from Actor WHERE salary < 500000;
```

```sql
SELECT id, nome from Actor WHERE id = "002";
```

> Error Code: 1054. Unknown column 'nome' in 'field list'.

A requisição está errada -> nome e o correto é NAME.

```sql
USE `carver-kahena-mansano-de-almeida`;
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
```

## 3.e.

> Error Code: 1054. Unknown column 'nome' in 'field list'

O nome da coluna 'nome' não existe, porque na criação da tabela foi utilizado 'name'.

## 4.a.

Selecione tudo da tabela Actor, onde o nome comece com A ou J, e tenha o salário maior que 300000.

## 4.b.

```sql
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```

## 4.c.

```sql
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%");
```

## 4.d.

```sql
SELECT * FROM Actor
WHERE (
	(name LIKE "%a%" OR name LIKE "%A%") OR (name LIKE "%g%" OR name LIKE "%G%")
)
AND salary BETWEEN 350000 AND 900000;
```

## 5.a.

```sql
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);
```

## 5.b.

```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

## 5.c.

```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

## 5.d.

```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);
```

## 5.e.

```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "004",
  "Teste",
  "Sinopse de teste",
  "2021-05-24",
  5
);
```

## 6.a.

```sql
SELECT id, name, synopsy FROM Movie
WHERE id = "001";
```

## 6.b.

```sql
SELECT * FROM Movie
WHERE name = "Teste";
```

## 6.c.

```sql
SELECT id, name, synopsy FROM Movie
WHERE rating > 7;
```

## 7.a.

```sql
SELECT * FROM Movie
WHERE name like "%vida%";
```

## 7.b.

```sql
SELECT * FROM Movie
WHERE name like "%vida%" OR synopsy like "%vida%";
```

## 7.c.

```sql
SELECT * FROM Movie
WHERE release_date <= CURRENT_DATE();
```

## 7.d.

```sql
SELECT * FROM Movie
WHERE (
  release_date <= CURRENT_DATE() AND
  (name like "%vida%" OR synopsy like "%vida%") AND
  rating > 7
);
```
