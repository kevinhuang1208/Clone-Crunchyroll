from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required
from app.models.models import db

user = Blueprint('user', __name__)

@user.route('/signin')
def swag():
    pass
