from flask.cli import AppGroup
from .users import seed_users, undo_users
from .anime import seed_anime, undo_anime
from .episodes import seed_episodes, undo_episodes
from .genres import seed_genres, undo_genres
from .reviews import seed_reviews, undo_reviews
from .favorites import seed_favorites, undo_favorites

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
    seed_users()
    seed_anime()
    seed_episodes()
    seed_reviews()
    seed_genres()
    seed_favorites()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_favorites()
    undo_genres()
    undo_reviews()
    undo_episodes()
    undo_anime()
    undo_users()
    # Add other undo functions here