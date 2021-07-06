
# users/forms.py
# file creates all the input form for user registration and account details
# allong with methods of validating and reseting user email/pictures/etc
#

from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError


class ChatForm(FlaskForm):
    channel_name = PasswordField('Channel Name', validators=[DataRequired()])
    password = PasswordField('Prefix command', validators=[DataRequired()])
    submit = SubmitField('Create')


