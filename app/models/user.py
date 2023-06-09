from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .reviews import Reviews
from .favorites import Favorites


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    studio = db.Column(db.Boolean, default=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        reviews_Search = Reviews.query.filter_by(user_id = self.id).all()
        reviews = []
        for review in reviews_Search:
            reviews.append(review.to_dict())

        favorites_Search = Favorites.query.filter_by(user_id = self.id).all()
        favorites_Id = []
        for eachAnime in favorites_Search:
            favorites_Id.append(eachAnime.anime_id)


        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'studio': self.studio,
            'reviews': reviews,
            'favorites': favorites_Id
        }

    anime = db.relationship('Anime', cascade="all,delete-orphan", back_populates = 'userid')
    review = db.relationship('Reviews', cascade="all,delete-orphan", back_populates = 'review_user_id')
    favorite = db.relationship('Favorites', cascade="all,delete-orphan", back_populates = 'user_id_favorites')
