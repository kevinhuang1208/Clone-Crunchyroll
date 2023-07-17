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
        title="Cartman Gets a Probe",
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
    popeye1 = Episodes(
    episode_number=1,
    title="Popeye The Sailor",
    anime_id=5,
    desc="Popeye sets sail on a wild adventure, encountering various challenges and foes along the way.",
    release_date=date(1933, 7, 14),
    video_link="https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+1+-+Popeye+The+Sailor.mp4",
    episode_cover_image='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
)
    popeye2 = Episodes(
        episode_number=2,
        title="I Yam What I Yam",
        anime_id=5,
        desc="Popeye embraces his unique identity and confronts a formidable enemy with his spinach-fueled strength.",
        release_date=date(1933, 9, 29),
        video_link="https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+2+-+I+Yam+What+I+Yam.mp4",
        episode_cover_image='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye3 = Episodes(
        episode_number=3,
        title="Blow Me Down",
        anime_id=5,
        desc="Popeye faces a turbulent storm and shows his resilience in the face of adversity.",
        release_date=date(1933, 10, 27),
        video_link="https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+3+-+Blow+Me+Down.mp4",
        episode_cover_image='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye4 = Episodes(
        episode_number=4,
        title="I Eats My Spinach",
        anime_id=5,
        desc="Popeye demonstrates the incredible strength and vitality he gains from consuming spinach.",
        release_date=date(1933, 11, 17),
        video_link="https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+4+-+I+Eats+My+Spinach.mp4",
        episode_cover_image='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye5 = Episodes(
        episode_number=5,
        title="Seasin's Greetinks!",
        anime_id=5,
        desc="Popeye celebrates the holiday season with his signature charm and humor.",
        release_date=date(1933, 12, 17),
        video_link="https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+5+-+Seasin's+Greetinks!.mp4",
        episode_cover_image='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye6 = Episodes(
        episode_number=6,
        title="Wild Elephinks",
        anime_id=5,
        desc="Popeye encounters a mischievous elephant and engages in a thrilling escapade.",
        release_date=date(1933, 12, 29),
        video_link="https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+6+-+Wild+Elephinks.mp4",
        episode_cover_image='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye7 = Episodes(
        episode_number=7,
        title="Sock-A-Bye, Baby",
        anime_id=5,
        desc="Popeye finds himself taking care of an adorable baby and hilarity ensues.",
        release_date=date(1934, 1, 19),
        video_link="https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+7+-+Sock-A-Bye%2C+Baby.mp4",
        episode_cover_image='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye8 = Episodes(
        episode_number = 8,
        title="Let's You And Him Fight",
        anime_id = 5,
        desc = "The Fight of the Century is announced between Bluto, the champ, and the challenger, Popeye the Sailor.",
        release_date = date(1934, 2, 16),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+8+-+Let's+You+And+Him+Fight.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
        )
    popeye9 = Episodes(
        episode_number = 9,
        title="The Man On The Flying Trapeze",
        anime_id = 5,
        desc = "The cartoon is a musical. Popeye sings (his theme tune) as he sails his ship",
        release_date = date(1934, 3, 16),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+9+-+The+Man+On+The+Flying+Trapeze.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye10 = Episodes(
        episode_number = 10,
        title="Can You Take It",
        anime_id = 5,
        desc = "Popeye accompanies Nurse Olive to her job at the Bruiser Boys Club's hospital ward.",
        release_date = date(1934, 4, 27),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+10+-+Can+You+Take+It.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye11 = Episodes(
        episode_number = 11,
        title="Shoein' Hosses",
        anime_id = 5,
        desc = 'Olives blacksmith business is not helped by her assistant J. Wellington Wimpys incompetence so she fires him and places a "Blacksmith Wanted" sign.',
        release_date = date(1934, 6, 1),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+11+-+Shoein'+Hosses.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye12 = Episodes(
        episode_number = 12,
        title="Strong To The Finich",
        anime_id = 5,
        desc = "At Olive Oyl's Health Farm for Children, six boys are waiting for the meal Olive is making for them, with their utensils prepared.",
        release_date = date(1934, 6, 29),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+12+-+Strong+To+The+Finich.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )
    popeye13 = Episodes(
        episode_number = 13,
        title="Shiver Me Timbers",
        anime_id = 5,
        desc = 'Popeye, Olive Oyl and Wimpy come across a seaside derelict ship whose hull displays an animate "Ghost ship - beware" sign.',
        release_date = date(1934, 7, 27),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/popeye/Episode+13+-+Shiver+Me+Timbers!.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116835494345580667/p13085838_b_v8_aa.jpg'
    )

    superman1 = Episodes(
        episode_number = 1,
        title="Superman the Mechanical Monsters",
        anime_id = 6,
        desc = "A robot flies into a scientist's secret lair and unloads a pile of cash into a vault.",
        release_date = date(1941, 11, 28),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/superman/superman_the_mechanical_monsters_512kb.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116840082905768076/MV5BNzdkNTc3Y2ItNjAwNy00NWZmLTg1MTgtNDFlYzNhYjhhZDIyXkEyXkFqcGdeQXVyNTkzNjY2NTc.png'
    )
    superman2 = Episodes(
        episode_number = 2,
        title="Billion Dollar Limited",
        anime_id = 6,
        desc = 'The Daily Planet reports the shipment of a billion dollars of gold to the US mint',
        release_date = date(1942, 1, 9),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/superman/Superman-03-Billion_Dollar_Limited_512kb.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116840486603329546/MV5BNzhjYmM5OWEtM2RhNC00MzYyLTg0N2EtOTA3Zjk1ZTJiZWRlXkEyXkFqcGdeQXVyNTkzNjY2NTc.png'
    )
    superman3 = Episodes(
        episode_number = 3,
        title="Destruction Inc",
        anime_id = 6,
        desc = 'One night in Metropolis, the elderly night watchman from the Metropolis Munitions Works is found dead in a swamp.',
        release_date = date(1942, 12, 25),
        video_link = "https://phillyrollv2.s3.us-east-2.amazonaws.com/superman/destruction_inc_512kb.mp4",
        episode_cover_image ='https://cdn.discordapp.com/attachments/1113213089702228038/1116840177277620274/MV5BODk2Y2QzMWQtY2IzZC00OTMyLWI0NGQtNzY0NGFhYmNhNjQyXkEyXkFqcGdeQXVyMTA5NjE3Nzk5.png'
    )

    db.session.add(rick1)
    db.session.add(rick2)

    db.session.add(koth1)
    db.session.add(koth2)

    db.session.add(boondocks1)
    db.session.add(boondocks2)

    db.session.add(southpark1)
    db.session.add(southpark2)

    db.session.add(popeye1)
    db.session.add(popeye2)
    db.session.add(popeye3)
    db.session.add(popeye4)
    db.session.add(popeye5)
    db.session.add(popeye6)
    db.session.add(popeye7)
    db.session.add(popeye8)
    db.session.add(popeye9)
    db.session.add(popeye10)
    db.session.add(popeye11)
    db.session.add(popeye12)
    db.session.add(popeye13)

    db.session.add(superman1)
    db.session.add(superman2)
    db.session.add(superman3)

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
