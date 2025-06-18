from DevClub_Store import app
from flask import render_template, url_for

@app.route("/")
def homepage():
    return render_template('home.html')