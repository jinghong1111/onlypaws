from flask import Flask, Blueprint
from flask_restx import Resource, Api, Namespace, fields
from .dog import api as dog
from .dog_chatinfo import api as chatinfo


# https://flask-restx.readthedocs.io/en/latest/scaling.html

api = Api(
    title='My Title',
    version='1.0',
    description='A description',
    # All API metadatas
)

# two api calls inside 
api.add_namespace(dog, path='/api/dog')
api.add_namespace(chatinfo, path='/api/chatinfo')
