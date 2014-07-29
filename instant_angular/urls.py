# coding=utf-8

from django.conf.urls import patterns, include, url

from django.contrib import admin

from .views import DirectTemplateView

admin.autodiscover()

urlpatterns = patterns(
    '',
    url(r'^$', DirectTemplateView.as_view()),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
