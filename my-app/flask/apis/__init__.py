from flask import Flask, Blueprint
from flask_restx import Resource, Api, Namespace, fields
from .dog import api as dog


# https://flask-restx.readthedocs.io/en/latest/scaling.html

api = Api(
    title='My Title',
    version='1.0',
    description='A description',
    # All API metadatas
)

# two api calls inside 
api.add_namespace(dog, path='/api/dog')