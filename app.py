"""Main backend file. Processes requests.
Returnes result in html-templates situated in "/templates".
"""

from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy


import config

app = Flask(__name__)
app.config.from_object(config)

db = SQLAlchemy(app)


@app.route("/")
def show_form():
    """Works when user goes to the root of the site. 
    Gives the opportunity to leave feedback on the form.
    """
    return render_template("form.html")


@app.route("/comments", methods=["GET", "POST"])
def answer_comment():
    """GET-request: showes all reviews stored in table Review.
    POST-request: validates user data with forms
    and, if successful, loads into the database.
    """
    from models import Review
    from forms import ReviewForm
    if request.method == "GET":
        reviews = Review.query.all()
        return render_template("comments.html", reviews=reviews)
    else:
        form = ReviewForm(request.form)
        if form.validate():
            review = Review(**form.data)
            print(review)
            db.session.add(review)
            db.session.commit()
            print(form.data)
            return str(review.name)
        else:
            print(form.errors)
            return "Извините, поля не могут быть пустыми, имя не может быть более 30 символов. Попробуйте еще раз", 400


if __name__ == "__main__":
    from models import *
    db.create_all()
    app.run()
