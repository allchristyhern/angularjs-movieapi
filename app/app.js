'use strict';


var $apiEndpoint = 'https://api.themoviedb.org/3/',
    $apiKey = '292246d21dd64f2a2ffb74f3fa04d50a',
    $imagepath = 'http://image.tmdb.org/t/p/w500',
    $error_noData = 'Oops! No connection to the database.';

// Angular App
var movieApp = angular.module( 'movieApp', ['ngRoute', 'ngAnimate'] );

// Configuration and routing
movieApp
  .config( ['$httpProvider',
    function ($httpProvider) {

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }
  ])
  .config( ['$routeProvider',
    function ($routeProvider) {

        $routeProvider
            .when('/:page', {
                controller: 'listController',
                templateUrl: 'app/views/main.html'
            })
            .when('/movies/:movieId', {
                controller: 'singleController',
                templateUrl: 'app/views/single.html'
            });

      $routeProvider.otherwise( {'redirectTo': '/popular'} );
    }
  ]);


// jQuery
(function($){
  'use strict';

  // Change navbar opacity on scroll
  $(window).scroll( function( event ) {

    var $nav = $('#main-navbar');
    if ( $(document).scrollTop() > 50 ) {
      $nav
        .addClass('scrolled');
    } else {
      $nav
        .removeClass('scrolled');
    }

  });

  // more

})(jQuery);
