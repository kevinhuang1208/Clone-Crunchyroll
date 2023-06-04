from flask import Blueprint, jsonify, session, request
from app.models.anime import Anime
from app.models.episodes import Episodes
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import login_required
from flask_login import current_user, login_user, logout_user, login_required

anime_routes = Blueprint("anime", __name__)

@anime_routes.route("/all")
def get_all_anime():
    """Route to get all of the anime information along with review count and avg"""

    all_anime = Anime.query.all()

    res = [anime.to_dict() for anime in all_anime]

    return {"anime": res}


@anime_routes.route("/<int:id>")
def get_one_anime(id):
    """Route to get the details of one anime based on id"""
    anime = Anime.query.get(id)
    anime_dict = anime.to_dict()
    return {"anime": anime_dict}

@anime_routes.route("/<int:id>/episodes")
def get_all_episodes(id):
    """query to get all the episodes for an anime"""
    anime_episodes = Episodes.query.filter(Episodes.anime_id == id).all()
    res = [episode.to_dict() for episode in anime_episodes]
    return {"episodes": res}


@anime_routes.route("/<int:anime_id>/episodes/<int:episode_num>")
def get_one_episode(anime_id, episode_num):
    """Route to get the details of one episode"""
    anime_episode = Episodes.query.filter(Episodes.anime_id == anime_id, Episodes.episode_number == episode_num)
    res = [episode.to_dict() for episode in anime_episode]
    return {"episode": res}

