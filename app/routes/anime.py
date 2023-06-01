from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required
from app.models import db

anime = Blueprint('anime',__name__)

@anime.route('/')

