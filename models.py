"""Database tables: now contains only one table "Review".
Database is stored in forumbase.db"""

from app import db


class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20), nullable=False)
    review_content = db.Column(db.String, nullable=False)


db.create_all()
