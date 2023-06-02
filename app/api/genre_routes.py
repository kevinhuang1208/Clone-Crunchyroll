from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Genre

genre_route = Blueprint('genre', __name__)


@genre_route.route('/')
@login_required
def genres():
    """
    Query for all genres and returns them in a list of user dictionaries
    """
    genre_list = Genre.query.all()
    return {'genres': [genre.to_dict() for genre in genre_list]}