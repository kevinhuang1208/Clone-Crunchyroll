from app.models.db import db, environment, SCHEMA
from app.models.genre import Genre
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_genres():

    comedyrick = Genre(
        anime_id = 1,
        genre = 'Comedy'
    )

    darkrick = Genre(
        anime_id = 1,
        genre = 'Dark Comedy'
    )

    adventurerick = Genre(anime_id = 1,genre = 'Adventure')

    kothcomedy = Genre(
        anime_id = 2,
        genre = 'Comedy'
    )

    boondocks = Genre(
        anime_id = 3,
        genre = 'Satire'
    )

    southpark = Genre(
        anime_id = 4,
        genre = 'Dark'
    )

    db.session.add(comedyrick)
    db.session.add(darkrick)
    db.session.add(adventurerick)
    db.session.add(kothcomedy)
    db.session.add(boondocks)
    db.session.add(southpark)
    db.session.commit()





def undo_genres():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.genres RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM genres"))
        
    db.session.commit()

