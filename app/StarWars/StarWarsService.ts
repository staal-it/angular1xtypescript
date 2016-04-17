/// <reference path="../../typings/tsd.d.ts" />

module AngularTypescript {
    
    export interface IStarWarsService {
        getFilms(): angular.IPromise<any>;
        getFilmDetails(filmId: number): angular.IPromise<any>
    }
    
    export class StarWarsService implements IStarWarsService {
        constructor(private $http: angular.IHttpService){
            
        }
        
        getFilms(): angular.IPromise<Film[]> {
            return this.$http.get('http://swapi.co/api/films/').then(function (response: any){
				return response.data.results;
			})
        }
        
        getFilmDetails(filmId: number): angular.IPromise<Film> {
            return this.$http.get('http://swapi.co/api/films/' + filmId).then(function (response){
				return response.data;
			})
        }
    }
    
    export class Film {
        title: string;
        episode_id: number;
        director: string;
        opening_crawl: string;
    }
    
    angular
       .module("AngularTypescript")
       .service("StarWarsService", StarWarsService);
}