from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', studio=False, password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io',studio=True,password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', studio=True, password='password')
    user1 = User(username='JohnDoe', email='john.doe@example.com', studio=False, password='password1')
    user2 = User(username='JaneSmith', email='jane.smith@example.com', studio=False, password='password2')
    user3 = User(username='MichaelJohnson', email='michael.johnson@example.com', studio=False, password='password3')
    user4 = User(username='EmilyBrown', email='emily.brown@example.com', studio=False, password='password4')
    user5 = User(username='DavidDavis', email='david.davis@example.com', studio=False, password='password5')
    user6 = User(username='SarahWilson', email='sarah.wilson@example.com', studio=False, password='password6')
    user7 = User(username='ChristopherTaylor', email='christopher.taylor@example.com', studio=False, password='password7')
    user8 = User(username='JessicaAnderson', email='jessica.anderson@example.com', studio=False, password='password8')
    user9 = User(username='MatthewThomas', email='matthew.thomas@example.com', studio=False, password='password9')
    user10 = User(username='OliviaClark', email='olivia.clark@example.com', studio=False, password='password10')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()