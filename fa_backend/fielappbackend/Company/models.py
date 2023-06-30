from djongo import models

from DataInit.models import Country, Department
from User.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=3)

class Company(models.Model):
    logo = models.CharField(max_length=100)
    companyName = models.CharField(max_length=150)
    NIT = models.CharField(max_length=15)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, default='')
    timetable = models.CharField(max_length=50)
    country_com = models.ForeignKey(Country, on_delete=models.CASCADE, blank=True, default='')
    department_com = models.ForeignKey(Department, on_delete=models.CASCADE, blank=True, default='')
    user_com =  models.ForeignKey(User, on_delete=models.CASCADE, blank=True, default='')
    address = models.CharField(max_length=300)
    telephone = models.CharField(max_length=15)
    
    


