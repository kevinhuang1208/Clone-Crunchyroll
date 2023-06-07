from flask_wtf import FlaskForm
from wtforms import StringField,DateField,FileField,IntegerField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed,FileRequired
# from app.api.aws_helpers import ALLOWED_VIDEOS

class EpisodeForm(FlaskForm):
    episode_number = IntegerField('Episode #',validators=[DataRequired()])
    description =StringField('Description', validators = [DataRequired()])
    # release_date = DateField('Date' , validators = [DataRequired()])
    release_date = StringField('Date', validators=[DataRequired()])
    video_link = FileField('Video File' , validators=[FileRequired(), FileAllowed(['mp4','mov'])])
    # video_link = StringField('video link')
    episode_cover_picture= FileField('cover_picture', validators=[FileRequired(),FileAllowed(['png', 'jpeg', 'jpg'])])
    title = StringField('Title', validators=[DataRequired()])
