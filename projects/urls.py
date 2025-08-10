from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.project_list, name='project_list'),
    path('contact/', views.contact_view, name='contact'),
    path('contact/success/', TemplateView.as_view(template_name='contact/success.html'), name='contact_success'),
]
