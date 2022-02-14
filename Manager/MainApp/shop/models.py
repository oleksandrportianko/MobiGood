import json

from django.db import models
from ..models import User

from django.utils import timezone

User = User


class Category(models.Model):

    name = models.CharField(max_length=255, verbose_name="Ім'я категорії")
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

    @property
    def products(self):
        return json.dumps(Product.objects.filter(category=self).values())


class Product(models.Model):

    COLOR_CHOICES = [
        (None, 'NoColor'),
        ('#000000', 'Black'),
        ('#696969', 'Grey'),
        ('#0000FF', 'Blue'),
        ('#008000', 'Green'),
        ('#FF0000', 'Red'),
        ('#D2691E', 'Orange'),
        ('#DA70D6', 'Violet'),
        ('#87CEFA', 'Light Blue'),
        ('#FFFAFA', 'White'),
        ('#FFC0CB', 'Pink'),
    ]

    category = models.ForeignKey(Category, verbose_name='Категорія', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Назва товару')
    description = models.TextField(verbose_name='Опис', null=True)
    price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name='Ціна')
    warranty = models.CharField(max_length=100, verbose_name='Гарантія', default='1 рік')
    image = models.ImageField(verbose_name='Зображення', blank=True)
    color = models.CharField(max_length=100, verbose_name='Колір зображення', choices=COLOR_CHOICES, blank=True)
    product_color = models.CharField(max_length=100,verbose_name='Колір продукту', null=True)

    def __str__(self):
        return self.title


class Smartphone(Product):

    slug = models.SlugField(unique=False, null=True)
    display = models.CharField(max_length=255, verbose_name='Діагональ, розширення, тип, інші особливості')
    battery = models.CharField(max_length=255, verbose_name="Об`єм акумулятора")
    memory = models.CharField(max_length=255, verbose_name="Об`єм оперативної та вбудованої пам`яті")
    main_cam_mp = models.CharField(max_length=255, verbose_name='Основна камера')
    frontal_cam_mp = models.CharField(max_length=255, verbose_name='Фронтальна камера')
    soc = models.CharField(max_length=255, verbose_name='Процесор')
    related_models = models.CharField(max_length=100000, verbose_name='Пов`язані моделі', blank=True)

    def __str__(self):
        return "{}, {}".format(self.id, self.color)


class CartProduct(models.Model):

    user = models.ForeignKey('User', verbose_name='Покупець', on_delete=models.CASCADE)
    cart = models.ForeignKey('Cart', verbose_name='Корзина', on_delete=models.CASCADE, related_name='related_products')
    qty = models.PositiveIntegerField(default=1, verbose_name='Кількість товару')
    product = models.ForeignKey(Product, verbose_name='Товар', on_delete=models.CASCADE)
    final_price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name='Загальна ціна')

    def __str__(self):
        return "Продукт: {} (для корзини)".format(self.product.title)

    def save(self, *args, **kwargs):
        self.final_price = self.qty * self.product.price
        super().save(*args, **kwargs)


class Cart(models.Model):

    owner = models.ForeignKey('User', null=True, verbose_name='Власник', on_delete=models.CASCADE)
    products = models.ManyToManyField(CartProduct, blank=True, related_name='related_cart')
    total_products = models.PositiveIntegerField(default=0)
    final_price = models.DecimalField(max_digits=9, default=0, decimal_places=2, verbose_name='Загальна ціна')
    in_order = models.BooleanField(default=False)
    for_anonymous_user = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)

    def save(self, *args, **kwargs):
        if self.id:
            self.total_products = self.products.count()
            self.final_price = sum([cproduct.final_price for cproduct in self.products.all()])
        super().save(*args, **kwargs)


# class Customer(models.Model):
#
#     user = models.OneToOneField(User, verbose_name='Покупець', on_delete=models.CASCADE)
#     address = models.CharField(max_length=255, verbose_name='Адрес', null=True, blank=True)
#     orders = models.ManyToManyField('Order', verbose_name='Замовлення покупця', related_name='related_order', blank=True)
#
#     def __str__(self):
#         if not (self.user.first_name and self.user.last_name):
#             return self.user.username
#         return "Покупець: {} {}".format(self.user.first_name, self.user.last_name)


class Order(models.Model):

    BUYING_TYPE_SELF = 'self'
    BUYING_TYPE_DELIVERY = 'delivery'

    BUYING_TYPE_CHOICES = (
        (BUYING_TYPE_SELF, 'Самовивіз'),
        (BUYING_TYPE_DELIVERY, 'Доставка')
    )

    customer = models.ForeignKey(User, verbose_name='Покупець', related_name='related_orders', on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, verbose_name='Корзина', on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=1024, verbose_name='Адрес', null=True, blank=True)
    buying_type = models.CharField(
        max_length=100,
        verbose_name='Тип замовлення',
        choices=BUYING_TYPE_CHOICES,
        default=BUYING_TYPE_SELF
    )
    comment = models.TextField(verbose_name='Комментарій до замовлення', null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True, verbose_name='Дата створення замовлення')
    order_date = models.DateField(verbose_name='Дата отримання замовлення', default=timezone.now)

    def __str__(self):
        return str(self.id)
