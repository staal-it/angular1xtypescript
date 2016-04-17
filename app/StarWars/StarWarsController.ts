/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="StarWarsService.ts" />

module AngularTypescript{
    export interface IStarWarsController {
        films: Film[];
    }
    
    export class StarWarsController implements IStarWarsController{
        films: Film[];
        
        static $inject = ["StarWarsService"];
        constructor(private starWarsService: IStarWarsService) {            
            starWarsService.getFilms().then((data: Film[]) => {
                this.films = data;
            });
	    }
    }  
    
    angular
       .module("AngularTypescript")
       .controller("StarWarsController", StarWarsController);
}