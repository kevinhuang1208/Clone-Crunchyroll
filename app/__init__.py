from flask import Flask
from .models import db
from .config import Config


app = Flask (__name__)

app.config.from_object(config)
