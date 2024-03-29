from django.forms import ModelForm
from .models import CreatePost


class CreatePostForm(ModelForm):
    class Meta:
        model=CreatePost
        fields=['category','title','content','date','url','imag']