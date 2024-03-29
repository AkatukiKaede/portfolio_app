from django.urls import path
from . import views

app_name='postmaiking'

urlpatterns=[
    path('post/',views.CreatePostView.as_view(),name='post'),
]