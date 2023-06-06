from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
# from app.models import Favorites

class FavoriteForm(FlaskForm):
    """Form to add a favorite"""
    animeId = IntegerField('animeId', validators=[DataRequired()])

