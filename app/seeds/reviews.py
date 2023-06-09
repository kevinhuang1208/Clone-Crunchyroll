from app.models.db import db, environment, SCHEMA
from app.models.reviews import Reviews
from sqlalchemy.sql import text

# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review_1 = Reviews(
        user_id=1, anime_id=2, review="King of the Hill is a timeless animated sitcom that seamlessly combines humor and heart. With its relatable characters and clever writing, it captures the essence of middle-class life in a way that is both entertaining and thought-provoking. The show's attention to detail, from the portrayal of the fictional town of Arlen to its well-developed ensemble cast, adds to its authenticity. King of the Hill stands as a classic in the genre, offering a delightful blend of wit, satire, and genuine storytelling.", rating=4)
    review_2 = Reviews(
        user_id=3, anime_id=4, review="South Park is an audacious and boundary-pushing animated series that has been pushing the limits of satire since its debut in 1997. With its irreverent humor and sharp social commentary, the show fearlessly tackles controversial topics with wit and unabashed satire. The colorful cast of characters, led by Stan, Kyle, Cartman, and Kenny, have become iconic figures in popular culture, representing different facets of society. South Park's animation style may be simple, but its ability to deliver biting satire and clever social commentary has solidified its status as a cultural phenomenon that continues to provoke and entertain audiences.", rating=3)
    review_3 = Reviews(
        user_id=2, anime_id=3, review="The Boondocks is a groundbreaking animated series that fearlessly tackles issues of race, politics, and social injustice with razor-sharp wit and unapologetic satire. Based on Aaron McGruder's comic strip of the same name, the show follows the Freeman family as they navigate the complex landscape of suburban life. With its thought-provoking storytelling and clever dialogue, The Boondocks expertly combines humor and social commentary, challenging viewers to confront uncomfortable truths. The animation style, with its vibrant and distinctive visual aesthetic, adds another layer of visual appeal to the series, making it a compelling and unforgettable viewing experience.", rating=5)
    

    review4 = Reviews(
        user_id=4, anime_id=1, review="It's a great anime with captivating storylines and well-developed characters. The animation quality is top-notch, and the soundtrack complements the series perfectly. I highly recommend it!",
        rating=4)

    review5 = Reviews(
        user_id=4, anime_id=2, review="It's a fantastic series that keeps you hooked from start to finish. The plot twists are unpredictable, and the character development is impressive. The animation style is visually stunning, and the voice acting is top-notch.",
        rating=5)

    review6 = Reviews(
        user_id=5, anime_id=3, review="I found it to be a bit underwhelming. The story felt disjointed, and the characters lacked depth. However, the animation quality was good, and the action sequences were well-animated.",
        rating=3)

    review7 = Reviews(
        user_id=5, anime_id=5, review="It exceeded my expectations! The plot was engaging, and the character development was excellent. The animation was smooth, and the fight scenes were adrenaline-pumping. Highly recommended!",
        rating=5)

    review8 = Reviews(
        user_id=6, anime_id=4, review="I absolutely loved it! The storyline was captivating, and the characters were relatable. The animation style was unique and visually appealing. The series kept me hooked from beginning to end.",
        rating=5)

    review9 = Reviews(
        user_id=6, anime_id=3, review="It's a must-watch for anime fans! The plot was intriguing, and the pacing was perfect. The animation was top-notch, and the voice acting was impressive. I can't wait for the next season!",
        rating=4)
    
    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()