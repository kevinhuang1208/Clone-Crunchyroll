from flask_wtf import FlaskForm
from wtforms import StringField, DateField, FileField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed,FileRequired
# from app.api.aws_helpers import ALLOWED_IMAGES
# from app.models import User


class AnimeForm(FlaskForm):
    """Form to create an anime page"""
    showname = StringField('showname', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    # release_date = DateField('release_date', validators=[DataRequired()])
    release_date = StringField('release_date', validators=[DataRequired()])
    # cover_picture =StringField('cover_picture')
    cover_picture= FileField('cover_picture', validators=[FileRequired(),FileAllowed(['png', 'jpeg', 'jpg'])])
