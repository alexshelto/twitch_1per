
from flask import (render_template, url_for, flash, redirect, request, abort, Blueprint)
from src.main.forms import ChatForm

from uuid import uuid1

from src.config import CONFIG

import socket



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
        channel = form.channel.data
        prefix = form.prefix.data

        return redirect(url_for('main.view', u_id=user_id, channel=channel, prefix=prefix))
    return render_template('create_feed.html', title='Create Entry', form=form)


@main.route('/view/<string:u_id>/<string:channel>/<string:prefix>', methods=['GET', 'POST'])
def view(u_id, channel, prefix):

    # IRC CONFIGS
    server='irc.chat.twitch.tv'
    port=6667
    u_name = CONFIG['BOT_USERNAME']
    oauth = CONFIG['OAUTH_TOKEN']

    #TODO: Implement retry_time (squred after each fail) and retry_count limit for exception
    try:
        print("connecting to irc")
        # Create connection
        irc = socket.socket() # Creating websocket
        irc.connect((server, port))
        irc.send(f'PASS {oauth}\n'.encode('utf-8'))
        irc.send(f'NICK {u_name}\n'.encode('utf-8'))
        irc.send(f'JOIN #{channel}\n'.encode('utf-8'))

    except ConnectionResetError:
        print("uh oh")

    print("connection sucsess")

    while True: 
        try:
            resp = irc.recv(2048).decode('utf-8')
            
            # If the response came from a chat
            if 'PRIVMSG' in resp: 
                username = resp.split('!')[0][1:]
                message = resp.split(':',3)[2]
                message = message.replace('\n', '')

                if message.startswith(prefix):
                    print(f'{username}: {message}')

        except socket.error:
            print('lost connection')
            #TODO: reconnection logic 

    print('outside of chat scraping')

    #TODO: Exception for canceling it on front end

    # KILL IRC
    irc.close()
    return render_template('view_feed.html')



@main.route('/about')
def about():
    return render_template('about.html')

'''
@main.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')
'''
