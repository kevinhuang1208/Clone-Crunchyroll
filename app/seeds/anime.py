from sqlalchemy.sql import text
from app.models.anime import Anime
from app.models.db import db, environment, SCHEMA
from datetime import date



def seed_anime():
    anime1 = Anime(
      user_id= 3,
      showname= 'Rick and Morty',
      desc= 'Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe.',
      release_date=date(2013, 12, 2),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1115034279118897295/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ._V1_.jpg',
      carousel_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1126643229299834991/Rick-and-Morty-S6.png'
        )
    anime2 = Anime(
      user_id= 2,
      showname= 'King of the Hill',
      desc= 'King of the Hill is set in the fictional small town of Arlen, Texas. The show centers on the Hill family, headed by the ever-responsible, calm, hard-working, loyal, disciplined, and honest propane and propane accessory salesman Hank Hill',
      release_date=date(1997, 1, 12),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1115034279374762044/p184316_b_v8_ac.jpg',
      carousel_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1126642583557378078/ec00b326c49abe2313d853051423572c7da4f6c26d6b484e160a0284ecae15c8.png'
        )
    anime3 = Anime(
      user_id= 3,
      showname='The Boondocks',
      desc='Adventures of two boys, Riley and Huey Freeman, who undergo a culture clash when they move from Chicago to the suburbs to live with their grandfather.',
      release_date= date(2005, 11, 6),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1115034279597068409/p9766190_b_v10_aa.jpg',
      carousel_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1126643418748158103/the_boondocks_banner_wallpaper_by_jpninja426_debkaea-fullview.png'
        )
    anime4 = Anime(
      user_id= 3,
      showname='South Park',
      desc='South Park centers around four boys: Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick. The boys live in the fictional small town of South Park, located within the real-life South Park basin in the Rocky Mountains of central Colorado, approximately a one-hour drive from Denver.',
      release_date= date(1997, 8, 13),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1115034888349962292/p184338_b_v13_aq.jpg',
      carousel_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1126643524415266940/1123312.png'
        )
    anime5 = Anime(
      user_id= 3,
      showname='Popeye',
      desc='Popeye, a pugnacious, wisecracking cartoon sailor who possesses superhuman strength after ingesting an always-handy can of spinach.',
      release_date= date(1933, 7, 14),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1116844335992930364/p13085838_b_v8_aa.png'
        )
    anime6 = Anime(
      user_id= 3,
      showname='Superman',
      desc='The Fleischer Superman cartoons are a series of 17 animated short films released in Technicolor by Paramount Pictures and based upon the comic book character Superman, making them his first animated appearance.',
      release_date= date(1941, 9, 26),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1116844562267250788/MV5BMTg4NDU0NjM1Ml5BMl5BanBnXkFtZTgwMzM0NDQ1MjE.png'
        )

    db.session.add(anime1)
    db.session.add(anime2)
    db.session.add(anime3)
    db.session.add(anime4)
    db.session.add(anime5)
    db.session.add(anime6)
    db.session.commit()

def undo_anime():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.animes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM animes"))

    db.session.commit()
