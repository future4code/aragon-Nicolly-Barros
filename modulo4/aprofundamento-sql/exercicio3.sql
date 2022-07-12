/* Letra a */
ALTER TABLE `Projetos`
DROP COLUMN title;

/* Letra b */
ALTER TABLE `Projetos`
CHANGE date dueDate DATE NOT NULL;

/* Letra c */
ALTER TABLE `Lista_Funcionarios`
MODIFY email VARCHAR(255) UNIQUE NOT NULL;

