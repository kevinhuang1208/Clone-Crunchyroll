from app.models.db import db, environment, SCHEMA
from app.models.favorites import Favorites
from sqlalchemy.sql import text
from datetime import date

def seed_favorites():
    test_fav = Favorites(
        user_id = 1,
        anime_id = 1,
        date_added = date(2023, 5, 7)
    )

    db.session.add(test_fav)
    db.session.commit()

def undo_favorites():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM favorites"))