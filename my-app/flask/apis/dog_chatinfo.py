# using chatgtp to get information of the dog breed that the user is searching for
from flask import jsonify, Response, request, make_response
from flask_restx import Resource, Api, Namespace, fields
import os
import openai
from dotenv import load_dotenv, find_dotenv
import requests 

load_dotenv(find_dotenv()) # load the env file
openai.api_key = os.getenv("CHAT_KEY")
openai.Model.list()


load_dotenv(find_dotenv())
image_k = os.getenv("PEXELS")


api = Namespace('chatinfo', description='questions and answers')
# routing the page w/ the frontend 
@api.route('/search/<string:chatinfo>')
class mapLookup(Resource):
    def get(self, chatinfo):
        chatinfo_n = get_chat_response(chatinfo)
        # filter out the NEWLINE characters from the response
        chatinfo_n = chatinfo_n.replace("\n", "")
        if chatinfo_n == None or chatinfo_n == "" or chatinfo_n == "Not a valid dog breed":
            return Response(status=400) # no location found
        return jsonify(Dog_Information = chatinfo_n, dog_pic = get_image_dog(chatinfo))

def get_chat_response(input):
    # using the openai api to get the information
    response = openai.Completion.create(
        model = "text-davinci-003", 
        prompt="Given a dog breed input, respond in the following dictionary format: {breedname: , origin: , personality: , takecare_guide (elaborate on how to groom, raise, train it):"
        + "if the input is not a valid dog breed, response with 'Not a valid dog breed'" + input,
        temperature=0.9,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0.6,
        stop=[" Human:", " AI:"]
    )
    text = response["choices"][0]["text"]
    return text

def get_image_dog(dogbreed):
    # using peexels api to get the image of the dog breed
    url = 'https://api.pexels.com/v1/search?query=' + dogbreed + '&per_page=1'
    response = requests.request("GET", url, headers = {'Authorization': image_k})
    response = response.json()
    image = response['photos'][0]['src']['medium']

    return image 

