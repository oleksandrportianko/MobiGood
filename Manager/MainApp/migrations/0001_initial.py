# Generated by Django 3.2.8 on 2021-12-02 18:55

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_products', models.PositiveIntegerField(default=0)),
                ('final_price', models.DecimalField(decimal_places=2, default=0, max_digits=9, verbose_name='Загальна ціна')),
                ('in_order', models.BooleanField(default=False)),
                ('for_anonymous_user', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name="Ім'я категорії")),
                ('slug', models.SlugField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Назва товару')),
                ('slug', models.SlugField()),
                ('description', models.TextField(null=True, verbose_name='Опис')),
                ('price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Ціна')),
                ('image1', models.ImageField(blank=True, upload_to='', verbose_name='Зображення 1')),
                ('color1', models.CharField(blank=True, choices=[(None, 'NoColor'), ('#000000', 'Black'), ('#696969', 'Grey'), ('#0000FF', 'Blue'), ('#008000', 'Green'), ('#FF0000', 'Red'), ('#D2691E', 'Orange'), ('#DA70D6', 'Violet'), ('#87CEFA', 'Light Blue'), ('#FFFAFA', 'White'), ('#FFC0CB', 'Pink')], max_length=100, verbose_name='Колір зображення 1')),
                ('image2', models.ImageField(blank=True, upload_to='', verbose_name='Зображення 2')),
                ('color2', models.CharField(blank=True, choices=[(None, 'NoColor'), ('#000000', 'Black'), ('#696969', 'Grey'), ('#0000FF', 'Blue'), ('#008000', 'Green'), ('#FF0000', 'Red'), ('#D2691E', 'Orange'), ('#DA70D6', 'Violet'), ('#87CEFA', 'Light Blue'), ('#FFFAFA', 'White'), ('#FFC0CB', 'Pink')], max_length=100, verbose_name='Колір зображення 2')),
                ('image3', models.ImageField(blank=True, upload_to='', verbose_name='Зображення 3')),
                ('color3', models.CharField(blank=True, choices=[(None, 'NoColor'), ('#000000', 'Black'), ('#696969', 'Grey'), ('#0000FF', 'Blue'), ('#008000', 'Green'), ('#FF0000', 'Red'), ('#D2691E', 'Orange'), ('#DA70D6', 'Violet'), ('#87CEFA', 'Light Blue'), ('#FFFAFA', 'White'), ('#FFC0CB', 'Pink')], max_length=100, verbose_name='Колір зображення 3')),
                ('image4', models.ImageField(blank=True, upload_to='', verbose_name='Зображення 4')),
                ('color4', models.CharField(blank=True, choices=[(None, 'NoColor'), ('#000000', 'Black'), ('#696969', 'Grey'), ('#0000FF', 'Blue'), ('#008000', 'Green'), ('#FF0000', 'Red'), ('#D2691E', 'Orange'), ('#DA70D6', 'Violet'), ('#87CEFA', 'Light Blue'), ('#FFFAFA', 'White'), ('#FFC0CB', 'Pink')], max_length=100, verbose_name='Колір зображення 4')),
                ('image5', models.ImageField(blank=True, upload_to='', verbose_name='Зображення 5')),
                ('color5', models.CharField(blank=True, choices=[(None, 'NoColor'), ('#000000', 'Black'), ('#696969', 'Grey'), ('#0000FF', 'Blue'), ('#008000', 'Green'), ('#FF0000', 'Red'), ('#D2691E', 'Orange'), ('#DA70D6', 'Violet'), ('#87CEFA', 'Light Blue'), ('#FFFAFA', 'White'), ('#FFC0CB', 'Pink')], max_length=100, verbose_name='Колір зображення 5')),
                ('image6', models.ImageField(blank=True, upload_to='', verbose_name='Зображення 6')),
                ('color6', models.CharField(blank=True, choices=[(None, 'NoColor'), ('#000000', 'Black'), ('#696969', 'Grey'), ('#0000FF', 'Blue'), ('#008000', 'Green'), ('#FF0000', 'Red'), ('#D2691E', 'Orange'), ('#DA70D6', 'Violet'), ('#87CEFA', 'Light Blue'), ('#FFFAFA', 'White'), ('#FFC0CB', 'Pink')], max_length=100, verbose_name='Колір зображення 6')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MainApp.category', verbose_name='Категорія')),
            ],
        ),
        migrations.CreateModel(
            name='Smartphone',
            fields=[
                ('product_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='MainApp.product')),
                ('display', models.CharField(max_length=255, verbose_name='Діагональ, розширення, тип, інші особливості')),
                ('battery', models.CharField(max_length=255, verbose_name='Об`єм акумулятора')),
                ('memory', models.CharField(max_length=255, verbose_name='Об`єм оперативної та вбудованої пам`яті')),
                ('main_cam_mp', models.CharField(max_length=255, verbose_name='Основна камера')),
                ('frontal_cam_mp', models.CharField(max_length=255, verbose_name='Фронтальна камера')),
                ('soc', models.CharField(max_length=255, verbose_name='Процесор')),
            ],
            bases=('MainApp.product',),
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255, unique=True)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('father_name', models.CharField(max_length=255)),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, unique=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(blank=True, max_length=1024, null=True, verbose_name='Адрес')),
                ('buying_type', models.CharField(choices=[('self', 'Самовивіз'), ('delivery', 'Доставка')], default='self', max_length=100, verbose_name='Тип замовлення')),
                ('comment', models.TextField(blank=True, null=True, verbose_name='Комментарій до замовлення')),
                ('created_at', models.DateTimeField(auto_now=True, verbose_name='Дата створення замовлення')),
                ('order_date', models.DateField(default=django.utils.timezone.now, verbose_name='Дата отримання замовлення')),
                ('cart', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='MainApp.cart', verbose_name='Корзина')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_orders', to=settings.AUTH_USER_MODEL, verbose_name='Покупець')),
            ],
        ),
        migrations.CreateModel(
            name='CartProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qty', models.PositiveIntegerField(default=1, verbose_name='Кількість товару')),
                ('final_price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Загальна ціна')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_products', to='MainApp.cart', verbose_name='Корзина')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MainApp.product', verbose_name='Товар')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Покупець')),
            ],
        ),
        migrations.AddField(
            model_name='cart',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Власник'),
        ),
        migrations.AddField(
            model_name='cart',
            name='products',
            field=models.ManyToManyField(blank=True, related_name='related_cart', to='MainApp.CartProduct'),
        ),
    ]
