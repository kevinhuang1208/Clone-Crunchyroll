import os


class Config:
    SECRRET_KEY = os.environ.get('SECRET_KEY')
