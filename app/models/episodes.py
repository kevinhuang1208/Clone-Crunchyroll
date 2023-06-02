from .db import db, add_prefix_for_prod, SCHEMA, environment

class Episodes(db.Model):

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    __tablename__ = 'episodes'
    id = db.Column(db.Integer, primary_key = True)
    episode_number = db.Column(db.Integer, nullable=False)
    anime_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('anime.id')), nullable=False)
    desc = db.Column(db.String(500), nullable=False)
    release_date = db.Column(db.Date, nullable=False)
    video_link = db.Column(db.String(500), nullable=False)

    animeid = db.relationship(
        "Anime", back_populates = 'episodes'
    )

    def to_dict(self):
        return{
            'id': self.id,
            'episodeNumber': self.episode_number,
            'animeId': self.anime_id,
            'desc': self.desc,
            'releaseDate': self.release_date,
            'videoLink': self.video_link
        }