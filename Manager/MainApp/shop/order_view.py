from rest_framework import viewsets


from .serializers import OrderSerializer, CustomOrderSerializer
from .models import Cart, Order

from rest_framework.views import APIView
from rest_framework.response import Response
from ..views import get_user_with_jwt_from_cookies


class AllOrdersView(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class CreateOrderView(APIView):
    def post(self, request):
        user = get_user_with_jwt_from_cookies(request)
        cart = Cart.objects.filter(owner=user, for_anonymous_user=False).first()
        serializer = CustomOrderSerializer(data=request.data)
        serializer.is_valid()
        address = serializer.data.get("address")
        comment = serializer.data.get("comment")
        print(str(address))
        print(str(comment))
        order = Order.objects.create(
            customer=user,
            cart=cart,
            address=address,
            comment=comment
        )
        order.save()
        serializer = OrderSerializer(order)
        return Response(serializer.data)


class CurrentUserOrders(APIView):
    def get(self, request):
        user = get_user_with_jwt_from_cookies(request)
        cart = Cart.objects.filter(owner=user).first()
        orders = Order.objects.filter(customer=user, cart=cart)
        data_list = []
        for order in orders:
            serializer = OrderSerializer(order)
            data = serializer.data
            data_list.append(data)
        return Response(data_list)
