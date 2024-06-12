from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Todo

# App object
app = FastAPI()

from database import (
    fetch_one_todo,
    fetch_all_todos,
    create_todo,
    update_todo,
    remove_todo
)

# CORS middleware
origins = [
    "http://localhost",
    "http://localhost:8080",
] 

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/todo")
async def get_todo():
    reponse = await fetch_all_todos()
    return reponse

@app.get("/api/todo/{id}", response_model=Todo)
async def get_todo_by_id(id: int):
    response = await fetch_one_todo(id)
    if response:
        return response
    raise HTTPException(404, f"Todo not found {id}")
    

@app.post("/api/todo", response_model=Todo)
async def post_todo(todo: Todo):
    response = await create_todo(todo)
    if response:
        return todo
    raise HTTPException(400, f"Something went wrong / Bad request" )

@app.put("/api/todo/{id}")
async def put_todo(id, data):
    return {"todo": id, "data": data}

@app.delete("/api/todo/{id}")
async def delete_todo(id: int):
    response = await remove_todo(id)
    if response:
        return {"todo": id}
    raise HTTPException(404, f"Todo not found {id}")
   
