from flask import Flask
from .models import db
from .config import Config
from .routes.user import user
from .routes.anime import anime

app = Flask (__name__)

app.config.from_object(config)

app.register_blueprint(user,url_prefix='/api/user')
app.register_blueprint(anime,url_prefix='/api/anime')
