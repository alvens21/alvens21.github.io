from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from .forms import ContactForm
from .models import Project

def project_list(request):
    projects = Project.objects.all()
    form = ContactForm()  # para available kapag include ang partial sa list page
    return render(request, 'projects/list.html', {
        'projects': projects,
        'form': form,
    })

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            phone = form.cleaned_data.get('phone', '')
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            full_message = f"Name: {name}\nPhone: {phone}\nEmail: {email}\n\nMessage:\n{message}"

            send_mail(
                subject=f'New message from {name}',
                message=full_message,
                from_email=getattr(settings, 'EMAIL_HOST_USER', email),
                recipient_list=[getattr(settings, 'CONTACT_RECIPIENT', 'youremail@gmail.com')],
                fail_silently=False,
            )
            return redirect('contact_success')
    else:
        form = ContactForm()

    # Render the partial directly (you asked for this)
    return render(request, 'partials/cta.html', {'form': form})
