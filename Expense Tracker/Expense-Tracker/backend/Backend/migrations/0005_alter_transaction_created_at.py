# Generated by Django 5.0.6 on 2024-05-30 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0004_alter_transaction_amount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='created_at',
            field=models.DateField(auto_created=True),
        ),
    ]
