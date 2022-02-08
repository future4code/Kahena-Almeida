### Exercício 01

a. Uma chave estrangeira é uma chave de banco de dados usada para vincular duas tabelas. A restrição identifica os relacionamentos entre as tabelas do banco de dados referenciando uma coluna, ou conjunto de colunas, na tabela Filho que contém a chave estrangeira, para a coluna PRIMARY KEY ou conjunto de colunas, na tabela Pai.

b.

```sql
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "001",
  "Mensagem de teste",
   06,
  "004"
);
```

c.

```sql
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-kahena-mansano-de-almeida`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

Responde que não é possível atualizar pois a foreign key está incorreta.

d.

```sql
ALTER TABLE Movie
DROP COLUMN rating;
```

e.

```sql
DELETE FROM Movie WHERE Movie.name='Teste';

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-kahena-mansano-de-almeida`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

Não é possível deletar uma linha pai, é preciso apagar os filhos antes.

### Exercício 02

a. Está sendo criada uma tabela relacionando os filmes com os atores.

b.

```sql
INSERT INTO MovieCast VALUES
('001', '001'), ('001','002'), ('003','005');
```

c.

```sql
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-kahena-mansano-de-almeida`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

d.

```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-kahena-mansano-de-almeida`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

Não é possível deletar uma linha pai, é preciso apagar os filhos antes.

### Exercício 03

a. Está sendo pedido um retorno do(s) filme(s) que esteja na tabela de rating.

b.

```sql
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```
