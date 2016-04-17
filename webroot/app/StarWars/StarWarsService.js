/// <reference path="../../typings/tsd.d.ts" />
var AngularTypescript;
(function (AngularTypescript) {
    var StarWarsService = (function () {
        function StarWarsService($http) {
            this.$http = $http;
        }
        StarWarsService.prototype.getFilms = function () {
            return this.$http.get('http://swapi.co/api/films/').then(function (response) {
                return response.data.results;
            });
        };
        StarWarsService.prototype.getFilmDetails = function (filmId) {
            return this.$http.get('http://swapi.co/api/films/' + filmId).then(function (response) {
                return response.data;
            });
        };
        return StarWarsService;
    }());
    AngularTypescript.StarWarsService = StarWarsService;
    var Film = (function () {
        function Film() {
        }
        return Film;
    }());
    AngularTypescript.Film = Film;
    angular
        .module("AngularTypescript")
        .service("StarWarsService", StarWarsService);
})(AngularTypescript || (AngularTypescript = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0YXJXYXJzL1N0YXJXYXJzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFFL0MsSUFBTyxpQkFBaUIsQ0FtQ3ZCO0FBbkNELFdBQU8saUJBQWlCLEVBQUMsQ0FBQztJQU90QjtRQUNJLHlCQUFvQixLQUEyQjtZQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUUvQyxDQUFDO1FBRUQsa0NBQVEsR0FBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLFFBQWE7Z0JBQ3hGLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQTtRQUNHLENBQUM7UUFFRCx3Q0FBYyxHQUFkLFVBQWUsTUFBYztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsUUFBUTtnQkFDNUYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDRyxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLGlDQUFlLGtCQWdCM0IsQ0FBQTtJQUVEO1FBQUE7UUFLQSxDQUFDO1FBQUQsV0FBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksc0JBQUksT0FLaEIsQ0FBQTtJQUVELE9BQU87U0FDSCxNQUFNLENBQUMsbUJBQW1CLENBQUM7U0FDM0IsT0FBTyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsRUFuQ00saUJBQWlCLEtBQWpCLGlCQUFpQixRQW1DdkIiLCJmaWxlIjoiU3RhcldhcnMvU3RhcldhcnNTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIEFuZ3VsYXJUeXBlc2NyaXB0IHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU3RhcldhcnNTZXJ2aWNlIHtcclxuICAgICAgICBnZXRGaWxtcygpOiBhbmd1bGFyLklQcm9taXNlPGFueT47XHJcbiAgICAgICAgZ2V0RmlsbURldGFpbHMoZmlsbUlkOiBudW1iZXIpOiBhbmd1bGFyLklQcm9taXNlPGFueT5cclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXJXYXJzU2VydmljZSBpbXBsZW1lbnRzIElTdGFyV2Fyc1NlcnZpY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IGFuZ3VsYXIuSUh0dHBTZXJ2aWNlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGdldEZpbG1zKCk6IGFuZ3VsYXIuSVByb21pc2U8RmlsbVtdPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCgnaHR0cDovL3N3YXBpLmNvL2FwaS9maWxtcy8nKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogYW55KXtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBnZXRGaWxtRGV0YWlscyhmaWxtSWQ6IG51bWJlcik6IGFuZ3VsYXIuSVByb21pc2U8RmlsbT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9zd2FwaS5jby9hcGkvZmlsbXMvJyArIGZpbG1JZCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2Upe1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cdFx0XHR9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIEZpbG0ge1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgZXBpc29kZV9pZDogbnVtYmVyO1xyXG4gICAgICAgIGRpcmVjdG9yOiBzdHJpbmc7XHJcbiAgICAgICAgb3BlbmluZ19jcmF3bDogc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAubW9kdWxlKFwiQW5ndWxhclR5cGVzY3JpcHRcIilcclxuICAgICAgIC5zZXJ2aWNlKFwiU3RhcldhcnNTZXJ2aWNlXCIsIFN0YXJXYXJzU2VydmljZSk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
