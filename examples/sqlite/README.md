# Using SQLite

Table:

| id  | name   | email            |
| --- | ------ | ---------------- |
| 1   | Haidar | haidar@gmail.com |
| 2   | Hanif  | hanif@gmail.com  |
| 3   | Impact | impact@gmail.com |

SQL Create Table:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50),
  email VARCHAR(50),
);
```

## Insers Users

```sql
INSERT INTO users (name, email)
VALUES
('Asterix','Asterix@gmail.com'),
('Obelix','Obelix@gmail.com'),
('Idefix','Idefix@gmail.com');
```

# SELECT DATA

```sql
SELECT * FROM users;
```

Output:

```txt
blabla
```

## DUMP DATA

```
.output dumpfilename.sql
.dump
```