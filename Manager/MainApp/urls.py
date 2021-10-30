from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from .views import UserViewSet




router = DefaultRouter()
router.register('users', UserViewSet)



urlpatterns = [
    path('mainapp/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
