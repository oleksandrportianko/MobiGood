from django.db import models
from django.urls import reverse



def get_models_for_count(*model_names):
    return [models.Count(model_name) for model_name in model_names]


def get_product_url(obj, viewname):
    ct_model = obj.__class__._meta.model_name
    return reverse(viewname, kwargs={'ct_model': ct_model, 'slug': obj.slug})


class CategoriesManager(models.Manager):

    CATEGORIES_NAME_COUNT_NAME = {
        'Смартфони': 'smartphone__count'
    }

    def get_queryset(self):
        return super().get_queryset()

    def get_categories_for_left_sidebar(self):
        models = get_models_for_count('smartphone')
        qs = list(self.get_queryset().annotate(*models))
        data = [
            dict(name=c.name, url=c.get_absolute_url(), count=getattr(c, self.CATEGORIES_NAME_COUNT_NAME[c.name]))
            for c in qs
        ]
        return data


class Categories(models.Model):

    name = models.CharField(max_length=255, verbose_name='Назва категорії')
    slug = models.SlugField(unique=True)
    objects = CategoriesManager()

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('categories_detail', kwargs={'slug': self.slug})


class Product(models.Model):

    class Meta:
        abstract = True
    CHOICES = [
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

    category = models.ForeignKey(Categories, verbose_name='Категорія', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Назва товару')
    slug = models.SlugField(unique=True)
    image1 = models.ImageField(verbose_name='Зображення (Колір 1)', default=None)
    color1 = models.CharField(max_length=255, choices=CHOICES, default=None, verbose_name='Колір зображення 1')
    image2 = models.ImageField(verbose_name='Зображення (Колір 2)', default=None)
    color2 = models.CharField(max_length=255, choices=CHOICES, default=None, verbose_name='Колір зображення 2')
    image3 = models.ImageField(verbose_name='Зображення (Колір 3)', default=None)
    color3 = models.CharField(max_length=255, choices=CHOICES, default=None, verbose_name='Колір зображення 3')
    image4 = models.ImageField(verbose_name='Зображення (Колір 4)', default=None)
    color4 = models.CharField(max_length=255, choices=CHOICES, default=None, verbose_name='Колір зображення 4')
    image5 = models.ImageField(verbose_name='Зображення (Колір 5)', default=None)
    color5 = models.CharField(max_length=255, choices=CHOICES, default=None, verbose_name='Колір зображення 5')
    image6 = models.ImageField(verbose_name='Зображення (Колір 6)', default=None)
    color6 = models.CharField(max_length=255, choices=CHOICES, default=None, verbose_name='Колір зображення 6')
    description = models.TextField(verbose_name='Опис', null=True)
    price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name='Ціна')

    def __str__(self):
        return self.title

    def get_model_name(self):
        return self.__class__.__name__.lower()


class Smartphone(Product):

    display = models.CharField(max_length=255, verbose_name='Діагональ, розширення, тип, інші особливості')
    battery = models.CharField(max_length=255, verbose_name="Об`єм акумулятора")
    memory = models.CharField(max_length=255, verbose_name="Об`єм оперативної та вбудованої пам`яті")
    main_cam_mp = models.CharField(max_length=255, verbose_name='Основна камера')
    frontal_cam_mp = models.CharField(max_length=255, verbose_name='Фронтальна камера')
    soc = models.CharField(max_length=255, verbose_name='Процесор')

    def __str__(self):
        return "{} : {}".format(self.category.name, self.title)

    def get_absolute_url(self):
        return get_product_url(self, 'product_detail')


