from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from .views import RegisterView, LoginView, UserView, LogoutView, UpdateUserView, ChangePasswordView

from .shop.product_view import CategoryViewSet, SmartphoneViewSet, CustomSmartphoneViewSet
from .shop.views import CartView, AddToCartView, ChangeQTYView, RemoveFromCartView,\
                        LikedListView, AddToLikedListView, RemoveFromLikedListView
from .shop.order_view import AllOrdersView, CurrentUserOrders, CreateOrderView

router = DefaultRouter()
router.register('smartphones', SmartphoneViewSet)
router.register('orders', AllOrdersView)


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

    path('current_user_liked_list/', LikedListView.as_view()),
    path('add_to_liked_list/<product_id>/', AddToLikedListView.as_view()),
    path('remove_from_liked_list/<liked_product_id>/', RemoveFromLikedListView.as_view()),
    
    path('get_current_user_orders/', CurrentUserOrders.as_view()),
    path('create_order/', CreateOrderView.as_view()),

    path('get_smartphone/<smartphone_id>/', CustomSmartphoneViewSet.as_view()),
    path('category/', CategoryViewSet.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
