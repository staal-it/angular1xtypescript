/// <reference path="../../typings/tsd.d.ts" />

module AngularTypescript{
    export class HomeController {
        title: string;
        constructor() {
            this.title = 'Home';
	    }
    }    
    
    angular
       .module("AngularTypescript")
       .controller("HomeController", HomeController);
}