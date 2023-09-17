from pymongo import MongoClient





def CreateServer():
    mongo_uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6"
    client = MongoClient(mongo_uri)

    db = client["TumorAi"]

    history_collection = db["History"]

    return client

def InsertHistory(client,history):
     db = client["TumorAi"]
     history_collection = db["History"]
     history_collection.insert_one(history)
     return "success"

    