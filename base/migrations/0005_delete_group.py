# Generated by Django 4.0 on 2021-12-08 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_rename_description_group_descr'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Group',
        ),
    ]
