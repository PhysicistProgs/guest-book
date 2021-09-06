"""Creates form for user data validation based on models.py"""

from models import Review
from wtforms_alchemy import ModelForm


class ReviewForm(ModelForm):
    class Meta:
        model = Review
