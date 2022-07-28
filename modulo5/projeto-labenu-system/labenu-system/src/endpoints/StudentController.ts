import { Request, Response } from "express"
import { StudentDataBase } from "../database/StudentDatabase"
import { Students } from "../models/Student"

export class StudentController {


  public async getAllStudents(req: Request, res: Response) {
    let errorCode = 400
    try {
      const search = req.query.search as string

      if (search) {
        const studentDatabase = new StudentDataBase()
        const result = await studentDatabase.getStudentsName(search)

        res.status(200).send({
          students: result
        })

      } else {

        const studentDatabase = new StudentDataBase()
        const result = await studentDatabase.getAllStudents()

        res.status(200).send({
          students: result
        })
      }

    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }


  public async createStudent(req: Request, res: Response) {
    let errorCode = 400
    try {
      const { name, email, birthdate, classroom_id } = req.body

      const student = new Students(
        Date.now().toString(),
        name,
        email,
        birthdate,
        classroom_id
      )

      const studentDatabase = new StudentDataBase()
      await studentDatabase.createStudent(student)

      res.status(201).send({
        message: "Aluno(a) cadastrado(a) com sucesso!",
        student: student
      })

    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }


  public async changeStudentClass(req: Request, res: Response) {
    let errorCode = 400
    try {
      const id = req.params.id as string
      const classroom_id = req.body.classroom_id as string

      const studentDataBase = new StudentDataBase()

      const findClass = await studentDataBase.verificationStudent(id)

      if (!findClass[0]) {
        errorCode = 404
        throw new Error("Estudante não encontrada.");
      }

      await studentDataBase.updateStudentClass(id, classroom_id)

      res.status(200).send({
        mensagem: "Alterado turma de estudante com sucesso!"
      })

    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }


  public async getStudentsClass(req: Request, res: Response) {
    let errorCode = 400

    try {
      const id = req.params.id as string

      const studentDataBase = new StudentDataBase()
      const result = await studentDataBase.getStudentsClassroom(id)

      res.status(200).send({students: result})
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }
}