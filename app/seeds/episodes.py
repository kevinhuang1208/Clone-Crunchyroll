from app.models.db import db, environment, SCHEMA
from app.models.episodes import Episodes
from sqlalchemy.sql import text
from datetime import date

# Adds a demo user, you can add other users here if you want
def seed_episodes():
    rick1 = Episodes(
        episode_number = 1,
        title="Pilot",
        anime_id = 1,
        desc = "Rick, in a drunken state, takes his grandson, Morty, for a ride in his flying car and rambles on about how he plans to use a neutrino bomb to wipe out all life on Earth. Rick lands the vehicle on Morty's demand and passes out. The bomb activates by itself and seems to be left unchecked, but ultimately it is shown that life on Earth remains intact. After having breakfast with their family, Rick takes Morty to another dimension to collect seeds of 'Mega Trees', which Morty is forced to hide in his own rectum to get past intergalactic customs. However, Rick and Morty's cover is blown and they escape while engaging in a shootout with alien insect soldiers. Ultimately, the seeds briefly cause Morty to be highly intelligent, despite the fact that he missed a semester of school because he's been in adventures with Rick.",
        release_date = date(2013, 2, 12),
        video_link = "https://crunchyclone.s3.us-east-2.amazonaws.com/%5Bpseudo%5D+Rick+and+Morty+S01E01+Pilot+%5BBDRip%5D+%5B1080p%5D+%5Bh.265%5D.mp4",
        episode_cover_image = 'https://cdn.discordapp.com/attachments/1116044689452322926/1116050616821747722/p10376286_e_v8_ab.png'
        )
    rick2 = Episodes(
        episode_number = 2,
        title="Lawnmower Dog",
        anime_id = 1,
        desc = "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher, in an attempt to make him give Morty an 'A' in math class. They find themselves in a dangerous situation, where they are forced to repeatedly enter dreams within dreams to escape. Eventually, they are chased by a dream character named Scary Terry, a 'legally safe' parody of Freddy Krueger. They manage to enter his dream, where they stand up for him against his bully teacher.",
        release_date = date(2013, 9, 12),
        video_link = "https://crunchyclone.s3.us-east-2.amazonaws.com/%5Bpseudo%5D+Rick+and+Morty+S01E02+Lawnmower+Dog+%5BBDRip%5D+%5B1080p%5D+%5Bh.265%5D.mp4",
        episode_cover_image = 'https://cdn.discordapp.com/attachments/1116044689452322926/1116045850506956930/ep2rm.jpeg'
        )
    koth1 = Episodes(
        episode_number = 1,
        title = 'Pilot',
        anime_id = 2,
        desc = "Strickland propane salesman and family man, Hank Hill, is accused of beating his son, Bobby, after Bobby gets a black eye from getting hit in the face with a baseball during a Little League game and rumors spread that Hank beat up a teenaged Megalo-Mart employee (when really he just yelled at him for not knowing if the store sells a tap and die and some WD-40). Meanwhile, Hank's friends, conspiracy nut Dale Gribble, down-and-out Army barber Bill Dauterive, and fast-talking womanizer Jeff Boomhauer, try to fix Hank's truck, while Luanne Platter (Hank's niece) moves in with the Hills after her parents get sent to jail over a domestic disturbance. The episode is also known as 'Bobby the Baseball Phenom'.",
        release_date = date(1997,1,12),
        video_link = "https://crunchyclone.s3.us-east-2.amazonaws.com/King+of+the+Hill+(1997)+-+S01E01+-+Pilot+(480p+DVD+x265+r00t).mp4",
        episode_cover_image = "https://cdn.discordapp.com/attachments/1116044689452322926/1116046145257484419/kothep1.jpeg"
    )

    koth2 = Episodes(
        episode_number = 2,
        title = 'Square Peg',
        desc = "Peggy is mortified and tongue-tied when she finds out she has been chosen to teach the middle school's sexual education class, while Hank does everything he can to keep his son from learning about sex.",
        anime_id = 2,
        release_date = date(1997,1,19),
        video_link = "https://crunchyclone.s3.us-east-2.amazonaws.com/King+of+the+Hill+(1997)+-+S01E02+-+Square+Peg+(480p+DVD+x265+r00t).mp4",
        episode_cover_image = 'https://media.discordapp.net/attachments/1116044689452322926/1116046345753591858/p1976098_e_v7_ab.png?width=412&height=610'
    )

    boondocks1 = Episodes(
        episode_number = 1,
        anime_id = 3,
        title="The Garden Party",
        desc = "The Freemans are adjusting to life in Woodcrest. Robert is invited to a ritzy garden party by tycoon Ed Wuncler, but is concerned that his grandsons will embarrass him in front of his new neighbors. At the party, Huey tries to enlighten the partygoers with the 'truth' and Ed III dares Riley to shoot him with a shotgun.",
        release_date = date(2005, 11, 6),
        video_link = "https://crunchyclone.s3.us-east-2.amazonaws.com/The+Boondocks+(2005)+-+S01E01+-+The+Garden+Party+(1080p+HMAX+WEB-DL+x265+YOGI).mp4", 
        episode_cover_image = "https://cdn.discordapp.com/attachments/1116044689452322926/1116046679175594156/p3187935_e_v8_ab.png"
    )

    boondocks2 = Episodes(
        episode_number = 2,
        anime_id = 3,
        title="The Trial of Robert Kelly",
        desc = "R. Kelly is brought to trial for urinating on an underage girl. Riley supports Kelly, but Huey sides with the law, thereby separating himself from many members of his own ethnicity who defend Kelly despite the overwhelming evidence against him.",
        release_date = date(2005, 11, 13),
        video_link = "https://crunchyclone.s3.us-east-2.amazonaws.com/The+Boondocks+(2005)+-+S01E02+-+The+Trial+of+Robert+Kelly+(1080p+HMAX+WEB-DL+x265+YOGI).mp4",
        episode_cover_image = "https://cdn.discordapp.com/attachments/1116044689452322926/1116046928766062652/p3187936_e_v8_ac.png"
    )

    southpark1 = Episodes(
        episode_number = 1,
        anime_id = 4,
        title="Cartman Gets an Anal Probe",
        desc = "Cartman tells his friends Stan, Kyle, and Kenny he had a dream about being abducted by aliens. The boys realize that this did actually happen when Kyle's baby brother, Ike is abducted also. They manage to rescue Ike while the aliens conclude that cows are the most intelligent species on the planet.",
        release_date = date(1997, 8, 13),
        video_link = "https://crunchyclone.s3.us-east-2.amazonaws.com/South.Park.S01E01.720p.BluRay.x264.100MB-Pahe.in.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1116044689452322926/1116046616932126771/analprobe.jpeg'
    )
    southpark2 = Episodes(
        episode_number = 2,
        title="Volcano",
        anime_id = 4,
        desc = "Stan's uncle Jimbo and his friend Ned take the four boys on a hunting trip in the mountains. Stan's father, a geologist, discovers that the mountain is a volcano about to erupt and convinces the townspeople to dig a trench for diverting the lava.",
        release_date = date(1997, 8, 20),
        video_link = "https://crunchyclone.s3.us-east-2.amazonaws.com/South.Park.S01E02.720p.BluRay.x264.100MB-Pahe.in.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1116044689452322926/1116046070070399138/p2026448_e_v10_ad.jpg'
    )

    db.session.add(rick1)
    db.session.add(rick2)

    db.session.add(koth1)
    db.session.add(koth2)

    db.session.add(boondocks1)
    db.session.add(boondocks2)

    db.session.add(southpark1)
    db.session.add(southpark2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_episodes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.episodes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM episodes"))
