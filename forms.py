from models import Review
from wtforms_alchemy import ModelForm

class ReviewForm(ModelForm):
    class Meta:
        model = Review


