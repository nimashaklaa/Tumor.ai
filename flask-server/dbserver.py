from pymongo import MongoClient


def InsertHistory(client,history):
     db = client["TumorAi"]
     history_collection = db["History"]
     history_collection.insert_one(history)
     return "success"

def GetHistory(client,user_id):
     db = client["TumorAi"]
     history_collection = db["History"]
     history = history_collection.find({'user_id':user_id})
     history_list = list(history)
     return history_list



def InsertProfile(client,profile):
     db = client["TumorAi"]
     profile_collection = db["Profile"]
     profile_collection.insert_one(profile)
     return "success"

def GetProfile(client,user_id):
        db = client["TumorAi"]
        profile_collection = db["Profile"]
        profile = profile_collection.find({'user_id':user_id})
        return profile
    