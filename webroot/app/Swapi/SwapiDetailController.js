/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="SwapiService.ts" />
var AngularTypescript;
(function (AngularTypescript) {
    var SwapiDetailController = (function () {
        function SwapiDetailController(swapiService, $routeParams) {
            var _this = this;
            this.swapiService = swapiService;
            this.id = $routeParams['filmId'];
            swapiService.getFilmDetails(this.id).then(function (data) {
                console.log(data);
                _this.title = data.title;
                _this.director = data.director;
                _this.opening_crawl = data.opening_crawl;
            });
        }
        SwapiDetailController.$inject = ["SwapiService", "$routeParams"];
        return SwapiDetailController;
    }());
    AngularTypescript.SwapiDetailController = SwapiDetailController;
    angular
        .module("AngularTypescript")
        .controller("SwapiDetailController", SwapiDetailController);
})(AngularTypescript || (AngularTypescript = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3YXBpL1N3YXBpRGV0YWlsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwrQ0FBK0M7QUFDL0Msd0NBQXdDO0FBRXhDLElBQU8saUJBQWlCLENBdUJ2QjtBQXZCRCxXQUFPLGlCQUFpQixFQUFBLENBQUM7SUFDckI7UUFRSSwrQkFBb0IsWUFBMkIsRUFBRSxZQUErQztZQVJwRyxpQkFrQkM7WUFWdUIsaUJBQVksR0FBWixZQUFZLENBQWU7WUFDM0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFakMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBVTtnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFWTSw2QkFBTyxHQUFHLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBV3RELDRCQUFDO0lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtJQWxCWSx1Q0FBcUIsd0JBa0JqQyxDQUFBO0lBQ0QsT0FBTztTQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUMzQixVQUFVLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNuRSxDQUFDLEVBdkJNLGlCQUFpQixLQUFqQixpQkFBaUIsUUF1QnZCIiwiZmlsZSI6IlN3YXBpL1N3YXBpRGV0YWlsQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJTd2FwaVNlcnZpY2UudHNcIiAvPlxyXG5cclxubW9kdWxlIEFuZ3VsYXJUeXBlc2NyaXB0e1xyXG4gICAgZXhwb3J0IGNsYXNzIFN3YXBpRGV0YWlsQ29udHJvbGxlciB7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgIGRpcmVjdG9yOiBzdHJpbmc7XHJcbiAgICAgICAgb3BlbmluZ19jcmF3bDogc3RyaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiU3dhcGlTZXJ2aWNlXCIsIFwiJHJvdXRlUGFyYW1zXCJdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3dhcGlTZXJ2aWNlOiBJU3dhcGlTZXJ2aWNlLCAkcm91dGVQYXJhbXM6IGFuZ3VsYXIucm91dGUuSVJvdXRlUGFyYW1zU2VydmljZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSAkcm91dGVQYXJhbXNbJ2ZpbG1JZCddO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dhcGlTZXJ2aWNlLmdldEZpbG1EZXRhaWxzKHRoaXMuaWQpLnRoZW4oKGRhdGE6IEZpbG0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdG9yID0gZGF0YS5kaXJlY3RvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ19jcmF3bCA9IGRhdGEub3BlbmluZ19jcmF3bDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgLm1vZHVsZShcIkFuZ3VsYXJUeXBlc2NyaXB0XCIpXHJcbiAgICAgICAuY29udHJvbGxlcihcIlN3YXBpRGV0YWlsQ29udHJvbGxlclwiLCBTd2FwaURldGFpbENvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
