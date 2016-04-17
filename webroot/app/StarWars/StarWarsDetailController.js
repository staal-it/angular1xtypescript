/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="StarWarsService.ts" />
var AngularTypescript;
(function (AngularTypescript) {
    var StarWarsDetailController = (function () {
        function StarWarsDetailController(starWarsService, $routeParams) {
            var _this = this;
            this.starWarsService = starWarsService;
            this.id = $routeParams['filmId'];
            starWarsService.getFilmDetails(this.id).then(function (data) {
                console.log(data);
                _this.title = data.title;
                _this.director = data.director;
                _this.opening_crawl = data.opening_crawl;
            });
        }
        StarWarsDetailController.$inject = ["StarWarsService", "$routeParams"];
        return StarWarsDetailController;
    }());
    AngularTypescript.StarWarsDetailController = StarWarsDetailController;
    angular
        .module("AngularTypescript")
        .controller("StarWarsDetailController", StarWarsDetailController);
})(AngularTypescript || (AngularTypescript = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0YXJXYXJzL1N0YXJXYXJzRGV0YWlsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwrQ0FBK0M7QUFDL0MsMkNBQTJDO0FBRTNDLElBQU8saUJBQWlCLENBdUJ2QjtBQXZCRCxXQUFPLGlCQUFpQixFQUFBLENBQUM7SUFDckI7UUFRSSxrQ0FBb0IsZUFBaUMsRUFBRSxZQUErQztZQVIxRyxpQkFrQkM7WUFWdUIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1lBQ2pELElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWpDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVU7Z0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM5QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBVk0sZ0NBQU8sR0FBRyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBV3pELCtCQUFDO0lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtJQWxCWSwwQ0FBd0IsMkJBa0JwQyxDQUFBO0lBQ0QsT0FBTztTQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUMzQixVQUFVLENBQUMsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUN6RSxDQUFDLEVBdkJNLGlCQUFpQixLQUFqQixpQkFBaUIsUUF1QnZCIiwiZmlsZSI6IlN0YXJXYXJzL1N0YXJXYXJzRGV0YWlsQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJTdGFyV2Fyc1NlcnZpY2UudHNcIiAvPlxyXG5cclxubW9kdWxlIEFuZ3VsYXJUeXBlc2NyaXB0e1xyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXJXYXJzRGV0YWlsQ29udHJvbGxlciB7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgIGRpcmVjdG9yOiBzdHJpbmc7XHJcbiAgICAgICAgb3BlbmluZ19jcmF3bDogc3RyaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiU3RhcldhcnNTZXJ2aWNlXCIsIFwiJHJvdXRlUGFyYW1zXCJdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhcldhcnNTZXJ2aWNlOiBJU3RhcldhcnNTZXJ2aWNlLCAkcm91dGVQYXJhbXM6IGFuZ3VsYXIucm91dGUuSVJvdXRlUGFyYW1zU2VydmljZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSAkcm91dGVQYXJhbXNbJ2ZpbG1JZCddO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhcldhcnNTZXJ2aWNlLmdldEZpbG1EZXRhaWxzKHRoaXMuaWQpLnRoZW4oKGRhdGE6IEZpbG0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdG9yID0gZGF0YS5kaXJlY3RvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ19jcmF3bCA9IGRhdGEub3BlbmluZ19jcmF3bDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgLm1vZHVsZShcIkFuZ3VsYXJUeXBlc2NyaXB0XCIpXHJcbiAgICAgICAuY29udHJvbGxlcihcIlN0YXJXYXJzRGV0YWlsQ29udHJvbGxlclwiLCBTdGFyV2Fyc0RldGFpbENvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
