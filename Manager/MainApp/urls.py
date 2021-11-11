from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from .views import CategoriesViewSet, SmartphoneViewSet, RegisterView, LoginView, UserView, LogoutView



router = DefaultRouter()
router.register('cat', CategoriesViewSet)
router.register('smphones', SmartphoneViewSet)




urlpatterns = [
    path('mainapp/', include(router.urls)),
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
