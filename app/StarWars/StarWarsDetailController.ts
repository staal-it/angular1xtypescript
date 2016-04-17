
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="StarWarsService.ts" />

module AngularTypescript{
    export class StarWarsDetailController {
        id: number;
        title: string;
        director: string;
        opening_crawl: string;
        
        
        static $inject = ["StarWarsService", "$routeParams"];
        constructor(private starWarsService: IStarWarsService, $routeParams: angular.route.IRouteParamsService){
            this.id = $routeParams['filmId'];
            
            starWarsService.getFilmDetails(this.id).then((data: Film) => {
                console.log(data);
                this.title = data.title;
                this.director = data.director;
                this.opening_crawl = data.opening_crawl;
            });
        }
    }
    angular
       .module("AngularTypescript")
       .controller("StarWarsDetailController", StarWarsDetailController);
}