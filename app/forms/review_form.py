from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class ReviewForm(FlaskForm):
    """WTForm to post a review for an anime"""
    # user_id = IntegerField('User ID', validators=[DataRequired()])
    # anime_id = IntegerField('Anime ID', validators=[DataRequired()])
    review = StringField('Review Field', validators=[DataRequired(), Length(min=100, max=1000)])
    rating = IntegerField('Rating Field', validators=[DataRequired(), NumberRange(min=1, max=5)])
