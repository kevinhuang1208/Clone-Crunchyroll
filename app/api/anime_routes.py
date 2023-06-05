from flask import Blueprint, jsonify, session, request, redirect
from app.models.anime import Anime
from app.models.episodes import Episodes
from app.models.reviews import Reviews
from app.models.db import db
from app.forms import LoginForm
from app.forms import SignUpForm
from app.forms.upload_episode import EpisodeForm

from app.api.aws_helpers import get_unique_filename,upload_file_to_s3,remove_file_from_s3

from flask_login import login_required
from flask_login import current_user, login_user, logout_user, login_required

from app.forms.post_anime_form import AnimeForm
from datetime import date



anime_routes = Blueprint("anime", __name__)

@anime_routes.route("")
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


@anime_routes.route("/<int:anime_id>/episodes/new", methods = ["POST"])
@login_required
def post_anime_episode(anime_id):
    """"Route to post an anime episode to an anime"""
    # user_id = current_user.id
    print('INSIDE THE POST ANIME ROUTE!!!!')
    form = EpisodeForm()

    form["csrf_token"].data = request.cookies["csrf_token"]


    if form.validate_on_submit():
        episode_file =form.data["video_link"]
        episode_file.filename = get_unique_filename(episode_file.filename)
        uploaded_episode = upload_file_to_s3(episode_file)
        aws_link = uploaded_episode['url']
        release_date_string = form.data["release_date"]
        [year, month, day] = release_date_string.split("-")

        new_episode = Episodes(
            episode_number=form.data["episode_number"],
            anime_id = anime_id,
            desc = form.data["desc"],
            release_date = date(int(year), int(month), int(day)),
            video_link = aws_link,
            # video_link = form.data["video_link"],
            title = form.data["title"]
        )
        db.session.add(new_episode)
        db.session.commit()
        return new_episode.to_dict()
    else:
        return jsonify({'error': form.errors})




@anime_routes.route("/<int:anime_id>/episodes/<int:episode_num>")
def get_one_episode(anime_id, episode_num):
    """Route to get the details of one episode"""
    ## Change from episode num to episode id?
    anime_episode = Episodes.query.filter(Episodes.anime_id == anime_id, Episodes.episode_number == episode_num)
    res = [episode.to_dict() for episode in anime_episode]
    return {"episode": res}




@anime_routes.route("/<int:id>/reviews")
def get_anime_reviews(id):
    """Route to get the reviews for a specific anime"""

    anime_reviews = Reviews.query.filter(Reviews.anime_id == id).all()
    # print('anime_reviews --->', anime_reviews)
    if anime_reviews:
        res = [review.to_dict() for review in anime_reviews]
        return {"reviews": res}
    else:
        return {"reviews": []}


@anime_routes.route("/new", methods=['POST'])
@login_required
def post_anime():
    """Display and post an anime"""

    form = AnimeForm()
    print('INSIDE THE POST ANIME ROUTE!!!')
    user_id = current_user.id
    # print ('THIS IS THE USER ID ~~~~~~~~~~>', user_id)

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        print('form data~~~~~>', form.data)
        print('video data~~~~~>', form.data['cover_picture'])
        ##need to add aws stuff here
        picture = form.data['cover_picture']
        picture.filename = get_unique_filename(picture.filename)
        uploaded_pic = upload_file_to_s3(picture)
        aws_link = uploaded_pic['url']
        # print('this is the aws_link ~~~~~>',aws_link)
        release_date_string = form.data["release_date"]
        [year, month, day] = release_date_string.split("-")

        new_anime = Anime(
            user_id=int(user_id),
            showname=form.data["showname"],
            desc=form.data["description"],
            release_date = date(int(year), int(month), int(day)),
            cover_picture = aws_link
            # cover_picture = form.data["cover_picture"]
        )
        db.session.add(new_anime)
        db.session.commit()
        return new_anime.to_dict()
    else:
        return jsonify({'error': form.errors})



@anime_routes.route("/delete/<int:anime_id>")
def delete(anime_id):
    anime_to_delete = Anime.query.get(anime_id)
    db.session.delete(anime_to_delete)
    db.session.commit()
    return redirect("/anime")
