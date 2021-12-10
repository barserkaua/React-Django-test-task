from rest_framework import serializers
from django.contrib.auth.models import User, Group


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    # in all modules and frontend side we using _id method, and if we want get exactly this method in Postman,
    # we serialize him
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    groups = GroupSerializer(many=True)

    class Meta:
        # we took all ours users, and transform to JSON format
        model = User
        # this will just tell us exactly what fields we want to return rather than just getting everything
        fields = ['id', '_id', 'username', 'email', 'name', 'groups', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    # we get user first name if the exist, if not, we take only email
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name
