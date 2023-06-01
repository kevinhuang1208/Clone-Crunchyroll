from .models import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model,UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(35), nullable= False, unique= True)
    email = db.Column(db.String(150), nullable = False, unique = True)
    password = db.Column (db.String(150), nullable = False)
