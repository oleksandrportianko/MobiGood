from django.contrib import admin
from .models import Categories, Smartphone, User


# Register your models here.
@admin.register(Categories)
class CategoriesModel(admin.ModelAdmin):
    list_filter = ('name', 'slug')
    list_display = ('name', 'slug')


@admin.register(Smartphone)
class SmartphonesModel(admin.ModelAdmin):
    list_filter = ('title', 'slug')
    list_display = ('title', 'slug')

@admin.register(User)
class UserModel(admin.ModelAdmin):
    list_filter = ('id', 'username')
    list_display = ('id', 'username')