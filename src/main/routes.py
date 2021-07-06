
from flask import (render_template, url_for, flash, redirect, request, abort, Blueprint)



#Creating a blueprint instance
main = Blueprint('main', __name__)





@main.route('/', methods=["GET","POST"])
def home():
    return render_template('index.html')
    
    







'''
@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')
'''
