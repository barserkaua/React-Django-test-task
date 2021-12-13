from django.contrib.auth.models import User, Group
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer, GroupSerializer

from django.contrib.auth.hashers import make_password
from rest_framework import status


# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/users',
        '/api/users/<id>',
        '/api/users/<id>/edit',

        '/api/groups',
        '/api/groups/<id>/edit',
    ]
    return Response(routes)


@api_view(['GET'])
def getUsers(request):
    # return all users from our database
    users = User.objects.all()

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getUserById(request, pk):
    # return all user from our database
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def editUser(request, pk):
    # we get user information
    user = User.objects.get(id=pk)
    # we clear ours group if we have it
    user.groups.clear()

    data = request.data

    user.username = data['email']
    user.email = data['email']
    add_group = Group.objects.get(name=data['groups'])
    user.groups.add(add_group)

    user.save()

    serializer = UserSerializer(user, many=False)

    return Response(serializer.data)


@api_view(['POST'])
def addUser(request):
    data = request.data

    try:
        user = User.objects.create(
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        add_group = Group.objects.get(name=data['groups'])
        user.groups.add(add_group)

        serializer = UserSerializer(user, many=False)

        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')


@api_view(['GET'])
def getGroups(request):
    # return all groups from our database
    groups = Group.objects.all()

    serializer = GroupSerializer(groups, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getGroupById(request, pk):
    # return all group from our database
    group = Group.objects.get(id=pk)
    serializer = GroupSerializer(group, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def addGroup(request):
    data = request.data

    try:
        group = Group.objects.create(
            name=data['name'],
            description=data['description'],
        )
        serializer = GroupSerializer(group, many=False)

        return Response(serializer.data)
    except:
        message = {'detail': 'Something going wrong :('}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteGroup(request, pk):
    groupForDeletion = Group.objects.get(id=pk)
    groupForDeletion.delete()
    return Response('Group was deleted')


@api_view(['PUT'])
def editGroup(request, pk):
    # we get group information
    group = Group.objects.get(id=pk)

    data = request.data

    group.name = data['name']
    group.description = data['description']

    group.save()

    serializer = GroupSerializer(group, many=False)

    return Response(serializer.data)

