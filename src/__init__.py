# init.py file
# file gathers all of the templates and forms to create the flask application
# the function of this file is called in the exported flask app file: run.py

from flask import Flask
import os


def create_app():
    #Configuring Flask application

    app = Flask(__name__)

    SECRET_KEY = os.urandom(32)
    app.config['SECRET_KEY'] = SECRET_KEY

    #Importing blueprint instances
    from src.main.routes import main
    #from src.errors.handlers import errors #instance of errors blueprint. similar for the rest of the imports

    #registering blueprints
    app.register_blueprint(main)

    #app.register_blueprint(errors)

    return app
