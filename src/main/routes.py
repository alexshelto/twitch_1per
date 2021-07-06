
from flask import (render_template, url_for, flash, redirect, request, abort, Blueprint)
from src.main.forms import ChatForm



#Creating a blueprint instance
main = Blueprint('main', __name__)





@main.route('/', methods=["GET","POST"])
def home():
    return render_template('index.html')
    
    

@main.route('/create_feed', methods=['GET', 'POST'])
def create_feed():
    form = ChatForm()
    if form.validate_on_submit():
        #form.channel.data, etc 
        flash('BAMMMM', 'success')

        return redirect(url_for('users.login')) 

    return render_template('create_feed.html', title='Create Entry', form=form)



@main.route('/about')
def about():
    return render_template('about.html')

'''
@main.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')
'''
