import { IClassroomDB, MODULE } from "../../models/Classroom";
import { IHobbieDB, IStudentDB, IStudentHobbiesDB } from "../../models/Student";

export const classrooms: IClassroomDB[] = [
    {
        id: "101",
        name: "Aragon",
        module: MODULE.MODULO_5
    },
    {
        id: "102",
        name: "Barros",
        module: MODULE.NOT_INIT
    },
    {
        id: "103",
        name: "Einstein",
        module: MODULE.MODULO_2
    }
]

export const students: IStudentDB[] = [
    {
        id: "1",
        name: "Nicoly Barros",
        email: "nicoly@gmail.com",
        birthdate: new Date("1999/11/25"),
        classroom_id: "101"
    },
    {
        id: "2",
        name: "Marcos Paulo",
        email: "marcosp@gmail.com",
        birthdate: new Date("1999/01/31"),
        classroom_id: "102"
    },
    {
        id: "3",
        name: "Isabelle Daru",
        email: "isadaru@gmail.com",
        birthdate: new Date("1995/07/07"),
        classroom_id: null
    },
]


export const hobbies: IHobbieDB[] = [
    {
        id: "01",
        title: "Leitura"
    },
    {
        id: "02",
        title: "Andar de patins"
    },
    {
        id: "03",
        title: "Academia"
    },
    {
        id: "04",
        title: "Andar de skate"
    }
]

export const studentsHobbies: IStudentHobbiesDB[] = [
    {
        student_id: "1",
        hobby_id: "02"
    },
    {
        student_id: "1",
        hobby_id: "03"
    },
    {
        student_id: "3",
        hobby_id: "01"
    }
]