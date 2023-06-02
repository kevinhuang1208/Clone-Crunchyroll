from .db import db, add_prefix_for_prod, SCHEMA, environment
from .reviews import Reviews

class Anime(db.Model):
    __tablename__ = 'animes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    showname = db.Column(db.String(255),nullable = False)
    desc = db.Column(db.String(1000),nullable = False)
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

    review_name = db.relationship(
        "Reviews", back_populates = 'review_anime_id'
    )

    animefavorites = db.relationship(
        'Favorites', back_populates = 'anime_id_favorites'
    )


    def to_dict(self):
        episode_reviews = Reviews.query.filter_by(anime_id = self.id).all()
        review_count = len(episode_reviews)
        review_sum = 0
        for review in episode_reviews:
            review_sum += review.rating
        avg_rating = 'no reviews'
        if review_count > 0:
            avg_rating = review_sum/review_count

        return{
            'id':self.id,
            'userId':self.user_id,
            'showname':self.showname,
            'desc':self.desc,
            'reviewCount': review_count,
            'avgRating': avg_rating,
            'releaseDate':self.release_date,
            'coverPicture':self.cover_picture
        }
    
