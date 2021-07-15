
from flask import (render_template, url_for, flash, redirect, request, abort, Blueprint)
from src.main.forms import ChatForm

from uuid import uuid1



#Creating a blueprint instance
main = Blueprint('main', __name__)



@main.route('/', methods=["GET","POST"])
def home():
    return render_template('index.html')
    
    

@main.route('/create_feed', methods=['GET', 'POST'])
def create_feed():
    form = ChatForm()
    if form.validate_on_submit():

        user_id = uuid1()
        print(f'Gave user the unique uuid: {user_id}')

        channel = form.channel.data
        prefix = form.prefix.data
        print(f'Channel: {channel}, Prefix: {prefix}')

        args = ({'id': user_id, 'channel': channel, 'prefix': prefix})

        print(args)


        return redirect(url_for('main.view', u_id=user_id, channel=channel, prefix=prefix))

    return render_template('create_feed.html', title='Create Entry', form=form)


@main.route('/view/<string:u_id>/<string:channel>/<string:prefix>', methods=['GET', 'POST'])
def view(u_id, channel, prefix):
    print(f'''
    uid: {u_id}
    channel: {channel}
    prefix: {prefix}
    ''')

    
    ## Connect To Twitch IRC
    ## Render chat messages
    return '<h1> blah </h1>'



    



@main.route('/about')
def about():
    return render_template('about.html')

'''
@main.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')
'''
