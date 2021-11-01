from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from .views import UserViewSet, CategoriesViewSet, SmartphoneViewSet, CustomObtainAuthToken



router = DefaultRouter()
router.register('users', UserViewSet)
router.register('cat', CategoriesViewSet)
router.register('smphones', SmartphoneViewSet)



urlpatterns = [
    path('mainapp/', include(router.urls)),
    path('auth/', CustomObtainAuthToken.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
