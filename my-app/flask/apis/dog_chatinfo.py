# using chatgtp to get information of the dog breed that the user is searching for
from flask import jsonify, Response, request, make_response
from flask_restx import Resource, Api, Namespace, fields
import os
import openai
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv()) # load the env file
openai.api_key = os.getenv("CHAT_KEY")
openai.Model.list()


api = Namespace('chatinfo', description='Getting the information about the dog breed')
# routing the page w/ the frontend 
@api.route('/search/<string:chatinfo>')
class mapLookup(Resource):
    def get(self, chatinfo):
        chatinfo_n = get_chat_response(chatinfo)
        if chatinfo_n == None or chatinfo_n == "":
            return Response(status=400) # no location found
        return jsonify(Dog_Information = chatinfo_n)

def get_chat_response(input):
    response = openai.Completion.create(
        engine="davinci",
        prompt=input,
        temperature=0.9,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0.6,
        stop=["\n", " Human:", " AI:"]
    )
    return response.choices[0].text