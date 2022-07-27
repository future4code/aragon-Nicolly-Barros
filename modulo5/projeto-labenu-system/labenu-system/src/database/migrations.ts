import { BaseDatabase } from "./BaseDatabase"
import { ClassroomDatabase } from "./ClassroomDatabase"
import { classrooms, hobbies, students, studentsHobbies } from "./data"
import { StudentDataBase } from "./StudentDatabase"

class Migrations extends BaseDatabase {
    public async execute() {
        try {
            await this.createTables()
            console.log("Tables created successfully")
            await this.insertData()
            console.log("Tables populated successfully")
        } catch (error) {
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Migrations completed.")
        }
    }

    private async createTables() {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS 
            ${ClassroomDatabase.TABLE_CLASSROOMS},
            ${StudentDataBase.TABLE_STUDENTS},
            ${StudentDataBase.TABLE_HOBBIES},
            ${StudentDataBase.STUDENTS_HOBBIES};
        
        CREATE TABLE IF NOT EXISTS ${ClassroomDatabase.TABLE_CLASSROOMS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            module ENUM("0","1", "2", "3", "4", "5", "6") DEFAULT "0"
        );
        
        CREATE TABLE IF NOT EXISTS ${StudentDataBase.TABLE_STUDENTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            birthdate DATE NOT NULL,
            classroom_id VARCHAR(255),
            FOREIGN KEY (classroom_id) REFERENCES ${ClassroomDatabase.TABLE_CLASSROOMS}(id)
        );

        CREATE TABLE IF NOT EXISTS ${StudentDataBase.TABLE_HOBBIES}(
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL UNIQUE
        );
        
        CREATE TABLE IF NOT EXISTS ${StudentDataBase.STUDENTS_HOBBIES}(
            student_id VARCHAR(255) NOT NULL,
            hobbie_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (student_id) REFERENCES ${StudentDataBase.TABLE_STUDENTS}(id),
            FOREIGN KEY (hobbie_id) REFERENCES ${StudentDataBase.TABLE_HOBBIES}(id)
        );
        `)
    }

    private async insertData() {
        await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .insert(classrooms)

        await BaseDatabase
            .connection(StudentDataBase.TABLE_STUDENTS)
            .insert(students)

        await BaseDatabase
            .connection(StudentDataBase.TABLE_HOBBIES)
            .insert(hobbies)

        await BaseDatabase
            .connection(StudentDataBase.STUDENTS_HOBBIES)
            .insert(studentsHobbies)
    }
}

const migrations = new Migrations()
migrations.execute() 