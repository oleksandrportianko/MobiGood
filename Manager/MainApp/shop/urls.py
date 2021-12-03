from django.urls import path, include

from .views import CategoryViewSet, SmartphoneViewSet
from .views import CartView, AddToCartView, ChangeQTYView, RemoveFromCartView

urlpatterns = [
    path('current_user_cart/', CartView.as_view()),
    path('add_to_cart/', AddToCartView.as_view()),
    path('change_qty/(?P<qty>\d+)/(?P<cart_product_id>\d+)/', ChangeQTYView.as_view()),
    path('remove_from_cart/(?P<cart_product_id>\d+)/', RemoveFromCartView.as_view()),
    path('category/', CategoryViewSet.as_view()),
    path('smartphones/', SmartphoneViewSet.as_view()),
]




