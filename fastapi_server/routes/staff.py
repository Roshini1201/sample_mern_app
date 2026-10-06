from fastapi import APIRouter

staff_router=APIRouter(prefix="/staff", tags=['staff'])

# localhost:8000/staff/addStaff
@staff_router.post("/addStaff")
def addStaff():
    return "addStaff method called"

# localhost:8000/staff/getStaff
@staff_router.get("/getStaff")
def getStaff():
    return "getStaff method called"

# localhost:8000/staff/updateStaff
@staff_router.put("/updateStaff")
def updateStaff():
    return "updateStaff method called"

# localhost:8000/staff/deleteStaff
@staff_router.delete("/deleteStaff")
def deleteStaff():
    return "deleteStaff method called"