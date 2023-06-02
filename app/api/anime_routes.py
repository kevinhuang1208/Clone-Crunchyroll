from flask import Blueprint, jsonify, session, request
from app.models.anime import Anime
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import login_required
from flask_login import current_user, login_user, logout_user, login_required

anime_routes = Blueprint("anime", __name__)

@anime_routes.route("/all")
def get_all_anime():
    """route to get all of the anime information"""

    all_anime = Anime.query.all()

    res = [anime.to_dict() for anime in all_anime]

    return {"anime": res}


