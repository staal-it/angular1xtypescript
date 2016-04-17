/// <reference path="../../typings/tsd.d.ts" />

module AngularTypescript{
     class StarWarsLogo implements angular.IDirective {
         constructor() {}
        templateUrl = 'app/StarWars/starwarsLogo.html';
        restrict = 'E';
        scope = {
                 height: '@',
                 width: '@'
            };
    }
    
    angular
       .module("AngularTypescript")
       .directive("starwarsLogo", () => new StarWarsLogo());
}