from django.contrib import admin
from .models import User
from .shop.models import Product, Category, Cart, CartProduct, Order, Smartphone

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(CartProduct)
admin.site.register(Order)
admin.site.register(Smartphone)


@admin.register(User)
class UserModel(admin.ModelAdmin):
    list_filter = ('id', 'username')
    list_display = ('id', 'username')

