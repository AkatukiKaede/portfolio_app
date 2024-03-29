from django.shortcuts import render
from django.views.generic import TemplateView,CreateView,ListView
from django.urls import reverse_lazy
from .forms import CreatePostForm
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

@method_decorator(login_required,name='dispatch')
class CreatePostView(CreateView):
    form_class=CreatePostForm
    template_name="post_create.html"
    success_url=reverse_lazy('portfolio:index')
    
    def form_valid(self,form):
        postdata=form.save(commit=False)
        postdata.save()
        return super().form_valid(form)