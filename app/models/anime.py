from .db import db, add_prefix_for_prod, SCHEMA, environment
from .reviews import Reviews
from .episodes import Episodes
from .user import User
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
        "Episodes", cascade="all,delete-orphan", back_populates = 'animeid'
    )
    anime_genre = db.relationship(
        "Genre", cascade="all,delete-orphan", back_populates = 'anime_id_genre'
    )

    review_name = db.relationship(
        "Reviews", cascade="all,delete-orphan",back_populates = 'review_anime_id'
    )

    animefavorites = db.relationship(
        'Favorites', cascade="all,delete-orphan", back_populates = 'anime_id_favorites'
    )


    def to_dict(self):
        # need to revise this query to just grab the count of reviews meeting this criteria
        episode_reviews = Reviews.query.filter_by(anime_id = self.id).all()
        review_count = len(episode_reviews)
        review_sum = 0
        for review in episode_reviews:
            review_sum += review.rating
        avg_rating = 'no reviews'
        if review_count > 0:
            avg_rating = review_sum/review_count
        #  need to revise this query to just grab the count of episodes meeting this criteria
        episodes = Episodes.query.filter_by(anime_id = self.id).all()
        episode_count = len(episodes)
        author = User.query.get(self.user_id)

        return{
            'id':self.id,
            'authorId':self.user_id,
            'authorName': author.username,
            'showname':self.showname,
            'desc':self.desc,
            'reviewCount': review_count,
            'avgRating': avg_rating,
            'releaseDate':self.release_date.strftime('%m/%d/%Y'),
            'coverPicture':self.cover_picture,
            'episodeCount': episode_count
        }
