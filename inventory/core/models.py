from pydoc import describe
from django.db import models

# Create your models here.
class Category(models.Model):

    category_name = models.CharField(blank=False, null=False, max_length=50, unique=True)
    category_code = models.CharField(blank=False, null=False, max_length=50, unique=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        db_table = "Category"
        verbose_name = "categories"
        verbose_name_plural ="categories"

    def __str__(self) -> str:
        return self.category_name

class Supplier(models.Model):

    name = models.CharField(blank=False, null=False, max_length=50)
    email = models.EmailField(unique=True)
    phone = models.CharField(blank=False, null=False, unique=True, max_length=50)
    country = models.CharField(max_length=70)
    city = models.CharField(max_length=70)
    address = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to="supplier")

    class Meta:
        db_table = "supplier"
        verbose_name = "supplier"
        verbose_name_plural = "suppliers"
    
    def __str__(self) -> str:
        return self.name
    
class Product(models.Model):
    
    class ProductStatus(models.TextChoices):
        AVAILABLE = "available", "Available"
        UNAVAILABLE = "unavailable", "Unavailable"


    name = models.CharField(max_length=150)
    sku = models.CharField(max_length=10)
    unit = models.CharField(max_length=10)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    quantity = models.IntegerField()
    status = models.CharField(
        max_length=15,
        choices=ProductStatus.choices,
        default=ProductStatus.AVAILABLE
    )
    supplier = models.ForeignKey(
        Supplier, 
        on_delete=models.CASCADE, 
        related_name="product"
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="product"
    )
    image = models.ImageField(upload_to="product")
    expiry_date = models.DateField()
    

    class Meta:
        db_table = "product"
        verbose_name = "product"
        verbose_name_plural = "products"

    