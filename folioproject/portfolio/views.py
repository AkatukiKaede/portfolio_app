from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views.generic import TemplateView,ListView,FormView,DetailView
from django.urls import reverse_lazy
from .form import ContactForm
from django.core.mail import EmailMessage
from postmaiking.models import Category,CreatePost

import os
module_dir = os.path.dirname(__file__) # views.pyのあるディレクトリを取得
json_path = os.path.join(module_dir, 'main.json')

import json
f = open(json_path, 'r')


class IndexView(ListView):
    template_name = "index.html"
    queryset = CreatePost.objects.all()

class ContactView(TemplateView):
    template_name="contact.html"
    
        

class ProfileView(TemplateView):
    template_name='profile.html'
    
    
class CategoryView(ListView):
    template_name='index.html'
    def get_queryset(self):
        category_id=self.kwargs['category']
        categories=CreatePost.objects.filter(
            category=category_id)
        
        return categories
    
class collectionDetailView(DetailView):
    template_name='collection.html'
    model=CreatePost