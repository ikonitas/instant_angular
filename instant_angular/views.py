# coding=utf-8

from django.views.generic.base import TemplateView


class DirectTemplateView(TemplateView):
    template_name = "home.html"
    extra_context = None

    def get_template_name(self):
        return self.template_name

    def get_context_data(self, **kwargs):
        context = super(self.__class__, self).get_context_data(**kwargs)
        return context
