from .db import db


class Anime(db.Model):
    __tablename__ = 'animes'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    showname = db.Column(db.String(255))
    desc = db.Column(db.String(500))
    release_date = db.Column(db.Date)
    cover_picture=db.Column(db.String(500), nullable = False)



    userid = db.relationship(
        "User", back_populates = 'anime'
    )

    
