from django.contrib import admin

from .models import CreatePost,Category

class CategoryAdmin(admin.ModelAdmin):
    list_display=('id','title')
    list_display_links=('id','title')

class PostAdmin(admin.ModelAdmin):
    list_display=('id','title')
    list_display_links=('id','title')
    
    
    
    
    
admin.site.register(Category,CategoryAdmin)
admin.site.register(CreatePost,PostAdmin)