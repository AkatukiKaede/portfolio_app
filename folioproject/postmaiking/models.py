from django.db import models

class Category(models.Model):
    title=models.CharField(
        verbose_name='カテゴリ',
        max_length=15
    )

    def __str__(self):
        return self.title


class CreatePost(models.Model):
    
    category=models.ForeignKey(
        Category,
        verbose_name='カテゴリ',
        on_delete=models.CASCADE
    )
    
    title=models.CharField(
        verbose_name='タイトル',
        max_length=100
    )
    
    content=models.TextField(
        verbose_name='本文')
    
    date=models.CharField(
        verbose_name='制作年月',
        max_length=10,
    )
    url=models.URLField(
        verbose_name='url',)
    
    imag=models.ImageField(
        verbose_name='image',
        upload_to='media/',
    )
    
    
    
    def __str__(self):
        return self.title
    
