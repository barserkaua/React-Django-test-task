# Generated by Django 4.0 on 2021-12-08 18:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='group',
            old_name='descr',
            new_name='descr',
        ),
    ]
