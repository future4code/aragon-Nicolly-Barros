/* Letra a */
SELECT * FROM `Lista_Funcionarios`;

/* Letra b */
SELECT id AS identifier, name FROM `Lista_Funcionarios`;

/* Letra c */
SELECT * FROM `Lista_Funcionarios`
WHERE id = "003";

/* Letra d */
SELECT * FROM `Lista_Funcionarios`
WHERE name LIKE "%a%";

/* Letra e */
SELECT * FROM `Lista_Funcionarios`
WHERE name NOT LIKE "%r%" AND email LIKE "%u%";