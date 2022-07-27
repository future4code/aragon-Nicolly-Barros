export interface IStudentDB {
    id: string,
    name: string,
    email: string,
    birthdate: Date,
    classroom_id: string | null
}

export interface IHobbieDB {
    id: string,
    title: string
}

export interface IStudentHobbiesDB {
    student_id: string,
    hobbie_id: string
}

export class Students {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthdate: Date,
        private classroom_id: string,
        private hobbies: string
    ){}

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }

    public getBirthdate(){
        return this.birthdate
    }

    public getClassroomId(){
        return this.classroom_id
    }

    public getHobbies(){
        return this.hobbies
    }
}