/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="StarWarsService.ts" />
var AngularTypescript;
(function (AngularTypescript) {
    var StarWarsController = (function () {
        function StarWarsController(starWarsService) {
            var _this = this;
            this.starWarsService = starWarsService;
            starWarsService.getFilms().then(function (data) {
                _this.films = data;
            });
        }
        StarWarsController.$inject = ["StarWarsService"];
        return StarWarsController;
    }());
    AngularTypescript.StarWarsController = StarWarsController;
    angular
        .module("AngularTypescript")
        .controller("StarWarsController", StarWarsController);
})(AngularTypescript || (AngularTypescript = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0YXJXYXJzL1N0YXJXYXJzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsMkNBQTJDO0FBRTNDLElBQU8saUJBQWlCLENBbUJ2QjtBQW5CRCxXQUFPLGlCQUFpQixFQUFBLENBQUM7SUFLckI7UUFJSSw0QkFBb0IsZUFBaUM7WUFKekQsaUJBU0M7WUFMdUIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1lBQ2pELGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZO2dCQUN6QyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztRQUNWLENBQUM7UUFMUywwQkFBTyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQU16Qyx5QkFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVFksb0NBQWtCLHFCQVM5QixDQUFBO0lBRUQsT0FBTztTQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUMzQixVQUFVLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUM3RCxDQUFDLEVBbkJNLGlCQUFpQixLQUFqQixpQkFBaUIsUUFtQnZCIiwiZmlsZSI6IlN0YXJXYXJzL1N0YXJXYXJzQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlN0YXJXYXJzU2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgQW5ndWxhclR5cGVzY3JpcHR7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTdGFyV2Fyc0NvbnRyb2xsZXIge1xyXG4gICAgICAgIGZpbG1zOiBGaWxtW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBTdGFyV2Fyc0NvbnRyb2xsZXIgaW1wbGVtZW50cyBJU3RhcldhcnNDb250cm9sbGVye1xyXG4gICAgICAgIGZpbG1zOiBGaWxtW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3RhdGljICRpbmplY3QgPSBbXCJTdGFyV2Fyc1NlcnZpY2VcIl07XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGFyV2Fyc1NlcnZpY2U6IElTdGFyV2Fyc1NlcnZpY2UpIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhcldhcnNTZXJ2aWNlLmdldEZpbG1zKCkudGhlbigoZGF0YTogRmlsbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbG1zID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcblx0ICAgIH1cclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAubW9kdWxlKFwiQW5ndWxhclR5cGVzY3JpcHRcIilcclxuICAgICAgIC5jb250cm9sbGVyKFwiU3RhcldhcnNDb250cm9sbGVyXCIsIFN0YXJXYXJzQ29udHJvbGxlcik7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
