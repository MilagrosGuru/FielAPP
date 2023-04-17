from djongo import models


class Country(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=3)
    
class Department(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=3)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

class City(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=3)
    departament = models.ForeignKey(Department, on_delete=models.CASCADE)

class DocumentType(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=3)

class Gender(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=3)