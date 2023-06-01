from .models import db

class Anime(db.Model):
    __tablename__ = 'animes'

    id = db.Column(db.Integer, primary_key = True)
    showname = db.Column(db.String(255))
    desc = db.Column(db.String(300))
    cover_picture=db.Column(db.String(500), nullable = False)
    release_date = db.Column()
