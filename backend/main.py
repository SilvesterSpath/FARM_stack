from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# App object
app = FastAPI()

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
    return {"todo": "todo"}

@app.get("/api/todo/{id}")
async def get_todo_by_id(id):
    return {"todo": id}

@app.post("/api/todo")
async def post_todo(todo):
    return {"todo": todo}

@app.put("/api/todo/{id}")
async def put_todo(id, data):
    return {"todo": id, "data": data}

@app.delete("/api/todo/{id}")
async def delete_todo(id):
    return {"todo": id}
