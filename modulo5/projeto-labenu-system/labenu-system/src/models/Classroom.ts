export enum MODULE {
    NOT_INIT = "0",
    MODULO_1 = "1",
    MODULO_2 = "2",
    MODULO_3 = "3",
    MODULO_4 = "4",
    MODULO_5 = "5",
    MODULO_6 = "6",
}

export interface IClassroomDB {
    id: string,
    name: string,
    module: MODULE
}

export class Classroom {
    constructor(
        private id: string,
        private name: string,
        private students: string[],
        private module: MODULE
    ){}

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getStudents(){
        return this.students
    }

    public getModule(){
        return this.module
    }
}