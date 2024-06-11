from model import Todo

# MongoDB driver
import motor.motor_asyncio

# Connecting to mongoDB default port
client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017/")

# Creating DB
database = client.TodoList
collection = database.todo

# Functions
async def fetch_one_todo(title):
  document = await collection.find_one({"title": title})
  return document

async def fetch_all_todos():
  todos = []
  documents = collection.find({})
  async for item in documents:
    todos.append(Todo(**item)) # this Todo is defined in model.py
  return todos

async def create_todo(todo):
  document = await collection.insert_one(todo.dict())
  return document

async def update_todo(id, desc):
  document = await collection.update_one({"id": id}, {"$set": {"description": desc}})
  return document

async def remove_todo(id):
  await collection.delete_one({"id": id})
  return True
  


