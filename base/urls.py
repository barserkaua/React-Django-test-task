from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/', views.getUsers, name="users"),
    path('users/add/', views.addUser, name="users-add"),
    path('users/delete/<str:pk>/', views.deleteUser, name="delete-user"),
    path('users/<str:pk>/', views.getUserById, name="user"),
    path('users/<str:pk>/edit/', views.editUser, name="user-edit"),

    path('groups/', views.getGroups, name="groups"),
    path('groups/add/', views.addGroup, name="groups-add"),
    path('groups/<str:pk>/', views.getGroupById, name="group"),
    path('groups/delete/<str:pk>/', views.deleteGroup, name="delete-group"),
    path('groups/<str:pk>/edit/', views.editGroup, name="group-edit"),
]