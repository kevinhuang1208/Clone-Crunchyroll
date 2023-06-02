from .db import db, add_prefix_for_prod, SCHEMA, environment

class Reviews(db.Model):

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    anime_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('animes.id')), nullable=False)
    review = db.Column(db.String(1000), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    review_user_id = db.relationship('User', back_populates = 'review')
    review_anime_id = db.relationship('Anime', back_populates = 'review_name')
