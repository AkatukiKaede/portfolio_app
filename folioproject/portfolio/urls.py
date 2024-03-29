from django.urls import path
from . import views

app_name='portfolio'

urlpatterns=[
    path('',views.IndexView.as_view(),name='index'),
    path('profile/',views.ProfileView.as_view(),name='profile'),
    path('made/<int:category>',views.CategoryView.as_view(),name='collection'),
    path('contact/',views.ContactView.as_view(),name="contact"),
    path('collection/<int:pk>',views.collectionDetailView.as_view(),name='collection_detail'),
    
]