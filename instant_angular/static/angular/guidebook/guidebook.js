
var guidebookConfig = function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ChaptersController',
      templateUrl: '/static/angular/guidebook/view/chapters.html'
    })
    .when('/chapter/:chapterId', {
      controller: 'ChaptersController',
      templateUrl: '/static/angular/guidebook/view/chapters.html'
    })
    .when('/addNote/:chapterId', {
      controller: 'AddNoteController',
      templateUrl: '/static/angular/guidebook/view/addNote.html'
    })
    .when('/deleteNote/:chapterId/:noteId', {
      controller: 'DeleteNoteController',
      templateUrl: '/static/angular/guidebook/view/addNote.html'
    })
  ;
};

var Guidebook = angular.module('Guidebook', ['ngRoute']).config(guidebookConfig);
