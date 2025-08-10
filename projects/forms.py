from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100, label="Name")
    phone = forms.CharField(max_length=15, label="Phone", required=False)
    email = forms.EmailField(label="Email Address")
    message = forms.CharField(widget=forms.Textarea, label="Message")
