### Exercício 1

a)

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

Serve para remover a coluna salary da tabela Actor.

b)

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

Altera o nome da coluna gender pelo nome sex.

c)

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

O comando altera o nome da coluna gender pelo nome gender, não alterando nada.

d)

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)

```sql
UPDATE Actor
SET name = "Fernanda Torres",
birth_date = "1965-09-15"
WHERE id = "003"
```

b)

```sql
UPDATE Actor
SET name = UPPER(name)
WHERE id = "005";
```

```sql
UPDATE Actor
SET name = LOWER(name)
WHERE id = "005";
```

c)

```sql
UPDATE Actor
SET name = "Juliana Paes",
salary = 5000,
birth_date = "1979-03-26",
gender = "female",
favorite_ice_cream_flavor =  "chocolate"
WHERE id = "005";
```

d)

```sql
Error Code: 1054. Unknown column 'teste' in 'field list'
```

Ele informa que realmente não existe essa coluna no campo da lista.

### Exercício 3

a)

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b)

```sql
DELETE FROM Actor WHERE (gender = "male" and salary > 1000000);
```

### Exercício 4

a)

```sql
SELECT MAX(salary) FROM Actor;
```

b)

```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)

```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)

```sql
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a)

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```

O comando contou quantas pessoas haviam por gênero.

b)

```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)

```sql
SELECT * FROM Actor
ORDER BY salary;
```

d)

```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)

```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```
