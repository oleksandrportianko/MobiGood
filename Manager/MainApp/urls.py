from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from .views import RegisterView, LoginView, UserView, LogoutView, UpdateUserView, ChangePasswordView

from .shop.views import CategoryViewSet, SmartphoneViewSet
from .shop.views import CartView, AddToCartView, ChangeQTYView, RemoveFromCartView

router = DefaultRouter()
router.register('smartphones', SmartphoneViewSet)


urlpatterns = [
    path('shop/', include(router.urls)),
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('update_user/', UpdateUserView.as_view()),
    path('change_password/', ChangePasswordView.as_view()),
    path('current_user_cart/', CartView.as_view()),
    path('add_to_cart/<product_id>/', AddToCartView.as_view()),
    path('change_qty/<qty>/<cart_product_id>/', ChangeQTYView.as_view()),
    path('remove_from_cart/<cart_product_id>/', RemoveFromCartView.as_view()),
    path('category/', CategoryViewSet.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
