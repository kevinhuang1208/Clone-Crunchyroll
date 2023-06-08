from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User



class EditCredentialForm(FlaskForm):
    username = StringField('username')
    email = StringField('email')
    password = StringField('password')
