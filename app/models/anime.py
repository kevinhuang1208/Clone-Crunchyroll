from .db import db, add_prefix_for_prod, SCHEMA, environment

class Anime(db.Model):
    __tablename__ = 'animes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    showname = db.Column(db.String(255),nullable = False)
    desc = db.Column(db.String(500),nullable = False)
    release_date = db.Column(db.Date, nullable = False)
    cover_picture=db.Column(db.String(500), nullable = False)



    userid = db.relationship(
        "User", back_populates = 'anime'
    )

    episodes = db.relationship(
        "Episodes", back_populates = 'animeid'
    )
    anime_genre = db.relationship(
        "Genre", back_populates = 'anime_id_genre'
    )

    def to_dict(self):
        return{
            'id':self.id,
            'userId':self.user_id,
            'showname':self.showname,
            'desc':self.desc,
            'releaseDate':self.release_date,
            'coverPicture':self.cover_picture
        }
    
