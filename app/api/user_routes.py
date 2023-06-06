from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User
from app.models.favorites import Favorites
from app.forms.edit_credentials_form import EditCredentialForm
from app.models.db import db
from app.forms.post_favorite_form import FavoriteForm
from datetime import date

user_routes = Blueprint('users', __name__)


@user_routes.route('/favorites/new', methods=["POST"])
@login_required
def addFavorite():
    """Add a favorite to a users favorites table"""
    form = FavoriteForm()
    user_id = current_user.id
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        anime_id = form.data['animeId']
        date_added = date.today()
        
        new_favorite = Favorites(
            anime_id = anime_id,
            user_id = int(user_id),
            date_added = date_added
        )
        db.session.add(new_favorite)
        db.session.commit()
        return new_favorite.to_dict()
    else:
        return jsonify({'error':form.errors})



    


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route("/<int:id>/edit", methods=["PUT"])
@login_required
def edit_credential(id):
    """Route to edit a user's credentials"""
    user = User.query.get(id)
    form = EditCredentialForm() 

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        user.username = form.data["username"]
        user.email = form.data["email"]
        user.password = form.data["password"]
        db.session.commit()
        edited_user = user.to_dict()
        return {'editedUser': edited_user}
    else:
        return {'error': form.errors}