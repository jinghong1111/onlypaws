from flask_restx import Namespace, Resource, fields
# flask imports 
from flask import jsonify, Response, request, make_response
import googlemaps 
from dotenv import load_dotenv, find_dotenv 
import os 
import requests 
# locate the env file for secured informations 
import time 

load_dotenv(find_dotenv())

api = Namespace('dog', description='Getting the information about the dog breed')

# accessing the google map api 
G_KEY = os.getenv("GOOGlE_API_K")
# accessing the pexels api

# routing the page w/ the frontend 
@api.route('/search/<string:dog>')

# setting up the class 
class mapLookup(Resource):
    def get(self, dog):
        dog_n = get_dog_names(dog)
        if dog_n == None or dog_n == "":
            return Response(status=400) # no location found
         
        return jsonify(NAMES = dog_n)

    
def get_dog_names(self):
    url = "https://dog.ceo/api/breeds/list/all" 
    response = requests.get(url)
    result = response.json()
    writeFile =open('result', 'w')
    writeFile.write(writeFile)
    writeFile.close()
    return result