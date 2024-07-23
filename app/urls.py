from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.get_home, name='home'),
    path('shop/', views.shop, name='shop'),
    path('cart/', views.cart, name='cart'),
    path('detail/', views.detail, name='detail'),
    path('register/', views.register, name='register'),
    path('login/', views.loginPage, name='login'),
    path('search/', views.search, name='search'),
    path('category/', views.category, name='category'),
    path('logout/', views.logoutPage, name='logout'),
    path('checkout/', views.checkout, name='checkout'),
    path('update_item/', views.updateItem, name='update_item'),
    path('update_quantity/', views.updateQuantity, name='update_quantity'),
]