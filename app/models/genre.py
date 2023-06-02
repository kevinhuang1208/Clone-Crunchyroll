from .db import db, add_prefix_for_prod, SCHEMA, environment

class Genre(db.Model):
    """Class to create genres for all anime"""
    __tablename__ = 'genres'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    anime_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('anime.id')), nullable=False)
    genre = db.Column(db.String(70), nullable=False)
  
    anime_id_genre = db.relationship(
        "Anime", back_populates = 'anime_genre'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'genre': self.genre
        }