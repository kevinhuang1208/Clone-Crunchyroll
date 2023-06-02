from .db import db, environment, SCHEMA, add_prefix_for_prod

class Favorites(db.Model):
    
    __tablename__ = 'favorites'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    anime_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('animes.id')), nullable=False)
    date_added = db.Column(db.Date, nullable = False)

    anime_id_favorites = db.relationship("Anime",back_populates = 'animefavorites')
    user_id_favorites = db.relationship('User', back_populates = 'favorite')

