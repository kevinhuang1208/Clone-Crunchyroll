from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required
from app.models import db

user_route = Blueprint('users', __name__)

@user_route.route('/user/signin')
