from .db import db, add_prefix_for_prod, SCHEMA, environment

class Reviews(db.Model):

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('user.id')), nullable=False)
    anime_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('anime.id')), nullable=False)
    review = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    review_user_id = db.Relationship('User', back_populates = )
