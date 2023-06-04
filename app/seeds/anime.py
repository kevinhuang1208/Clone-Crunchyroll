from sqlalchemy.sql import text
from app.models.anime import Anime
from app.models.db import db, environment, SCHEMA
from datetime import date



def seed_anime():
    anime1 = Anime(
      user_id= 2,
      showname= 'Rick and Morty',
      desc= 'Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe.',
      release_date=date(2013, 12, 2),
      cover_picture='test.com'
        )
    anime2 = Anime(
      user_id= 2,
      showname= 'King of the Hill',
      desc= 'King of the Hill is set in the fictional small town of Arlen, Texas. The show centers on the Hill family, headed by the ever-responsible, calm, hard-working, loyal, disciplined, and honest propane and propane accessory salesman Hank Hill',
      release_date=date(1997, 1, 12),
      cover_picture='test.com'
        )
    anime3 = Anime(
      user_id= 3,
      showname='The Boondocks',
      desc='Adventures of two boys, Riley and Huey Freeman, who undergo a culture clash when they move from Chicago to the suburbs to live with their grandfather.',
      release_date= date(2005, 11, 6),
      cover_picture='test.com'
        )
    anime4 = Anime(
      user_id= 2,
      showname='South Park',
      desc='South Park centers around four boys: Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick. The boys live in the fictional small town of South Park, located within the real-life South Park basin in the Rocky Mountains of central Colorado, approximately a one-hour drive from Denver.',
      release_date= date(1997, 8, 13),
      cover_picture='test.com'
        )

    db.session.add(anime1)
    db.session.add(anime2)
    db.session.add(anime3)
    db.session.add(anime4)
    db.session.commit()

def undo_anime():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.animes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM animes"))
        
    db.session.commit()