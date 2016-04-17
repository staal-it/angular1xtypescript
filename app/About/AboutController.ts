/// <reference path="../../typings/tsd.d.ts" />

module AngularTypescript{
    export class AboutController {
        title: string;
        constructor() {
            this.title = 'about';
	    }
    }    
    
    angular
       .module("AngularTypescript")
       .controller("AboutController", AboutController);
}