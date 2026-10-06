from fastapi import APIRouter

from database import student_collection
from models import Student_model

student_router=APIRouter(prefix="/student", tags=['student'])

# localhost:8000/student/addStudent
@student_router.post("/addStudent")
def addStudent(stu:Student_model):
    result=student_collection.insert_one(stu.model_dump())
    return "addStudent method called"

# localhost:8000/student/getStudent
@student_router.get("/getStudent")
def getStudent():
    return "getStudent method called"

# localhost:8000/student/updateStudent
@student_router.put("/updateStudent")
def updateStudent():
    return "updateStudent method called"

# localhost:8000/student/deleteStudent
@student_router.delete("/deleteStudent")
def deleteStudent():
    return "deleteStudent method called"