"""Configures server and database"""

DEBUG = True
SECRET_KEY = 'asdfsdfssf asf dsgsdg'

# Database settings:
SQLALCHEMY_DATABASE_URI = 'sqlite:///forumbase.db'
SQLALCHEMY_TRACK_MODIFICATIONS = False

WTF_CSRF_ENABLED = False
