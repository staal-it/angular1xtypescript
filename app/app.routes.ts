/// <reference path="../typings/tsd.d.ts" />

module AngularTypescript {
    "use strict";
    export class RouteConfiguration {
        
        static $inject = ["$routeProvider"];
        constructor($routeProvider: ng.route.IRouteProvider){
            
            $routeProvider
            .when("/home", {
                templateUrl: "app/Home/home.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
            .when("/about", {
                templateUrl: "app/About/about.html",
                controller: "AboutController",
                controllerAs: "vm"
            })
            .when("/films", {
                templateUrl: "app/StarWars/starwarslist.html",
                controller: "StarWarsController",
                controllerAs: "vm"
            })
            .when("/films/:filmId", {
                templateUrl: "app/StarWars/starwarsdetails.html",
                controller: "StarWarsDetailController",
                controllerAs: "vm"
            })
            .otherwise({
                redirectTo: "/home"
            });
        }
    }

    angular
        .module("AngularTypescript")
        .config(RouteConfiguration);
}