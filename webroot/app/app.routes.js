/// <reference path="../typings/tsd.d.ts" />
var AngularTypescript;
(function (AngularTypescript) {
    "use strict";
    var RouteConfiguration = (function () {
        function RouteConfiguration($routeProvider) {
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
        RouteConfiguration.$inject = ["$routeProvider"];
        return RouteConfiguration;
    }());
    AngularTypescript.RouteConfiguration = RouteConfiguration;
    angular
        .module("AngularTypescript")
        .config(RouteConfiguration);
})(AngularTypescript || (AngularTypescript = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBRTVDLElBQU8saUJBQWlCLENBcUN2QjtBQXJDRCxXQUFPLGlCQUFpQixFQUFDLENBQUM7SUFDdEIsWUFBWSxDQUFDO0lBQ2I7UUFHSSw0QkFBWSxjQUF1QztZQUUvQyxjQUFjO2lCQUNiLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsVUFBVSxFQUFFLGdCQUFnQjtnQkFDNUIsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQztpQkFDRCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNaLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDWixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxVQUFVLEVBQUUsb0JBQW9CO2dCQUNoQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDO2lCQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDcEIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsVUFBVSxFQUFFLDBCQUEwQjtnQkFDdEMsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQztpQkFDRCxTQUFTLENBQUM7Z0JBQ1AsVUFBVSxFQUFFLE9BQU87YUFDdEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQTNCTSwwQkFBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQTRCeEMseUJBQUM7SUFBRCxDQTlCQSxBQThCQyxJQUFBO0lBOUJZLG9DQUFrQixxQkE4QjlCLENBQUE7SUFFRCxPQUFPO1NBQ0YsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1NBQzNCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsRUFyQ00saUJBQWlCLEtBQWpCLGlCQUFpQixRQXFDdkIiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBBbmd1bGFyVHlwZXNjcmlwdCB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGV4cG9ydCBjbGFzcyBSb3V0ZUNvbmZpZ3VyYXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiJHJvdXRlUHJvdmlkZXJcIl07XHJcbiAgICAgICAgY29uc3RydWN0b3IoJHJvdXRlUHJvdmlkZXI6IG5nLnJvdXRlLklSb3V0ZVByb3ZpZGVyKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC53aGVuKFwiL2hvbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL0hvbWUvaG9tZS5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIkhvbWVDb250cm9sbGVyXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6IFwidm1cIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAud2hlbihcIi9hYm91dFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvQWJvdXQvYWJvdXQuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJBYm91dENvbnRyb2xsZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC53aGVuKFwiL2ZpbG1zXCIsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9TdGFyV2Fycy9zdGFyd2Fyc2xpc3QuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJTdGFyV2Fyc0NvbnRyb2xsZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC53aGVuKFwiL2ZpbG1zLzpmaWxtSWRcIiwge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL1N0YXJXYXJzL3N0YXJ3YXJzZGV0YWlscy5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIlN0YXJXYXJzRGV0YWlsQ29udHJvbGxlclwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiBcInZtXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm90aGVyd2lzZSh7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvOiBcIi9ob21lXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKFwiQW5ndWxhclR5cGVzY3JpcHRcIilcclxuICAgICAgICAuY29uZmlnKFJvdXRlQ29uZmlndXJhdGlvbik7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
