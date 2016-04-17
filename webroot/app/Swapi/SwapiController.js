/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="SwapiService.ts" />
var AngularTypescript;
(function (AngularTypescript) {
    var SwapiController = (function () {
        function SwapiController(swapiService) {
            var _this = this;
            this.swapiService = swapiService;
            swapiService.getFilms().then(function (data) {
                _this.films = data;
            });
        }
        SwapiController.$inject = ["SwapiService"];
        return SwapiController;
    }());
    AngularTypescript.SwapiController = SwapiController;
    angular
        .module("AngularTypescript")
        .controller("SwapiController", SwapiController);
})(AngularTypescript || (AngularTypescript = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3YXBpL1N3YXBpQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0Msd0NBQXdDO0FBRXhDLElBQU8saUJBQWlCLENBbUJ2QjtBQW5CRCxXQUFPLGlCQUFpQixFQUFBLENBQUM7SUFLckI7UUFJSSx5QkFBb0IsWUFBMkI7WUFKbkQsaUJBU0M7WUFMdUIsaUJBQVksR0FBWixZQUFZLENBQWU7WUFDM0MsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVk7Z0JBQ3RDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUxTLHVCQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQU10QyxzQkFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVFksaUNBQWUsa0JBUzNCLENBQUE7SUFFRCxPQUFPO1NBQ0gsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1NBQzNCLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN2RCxDQUFDLEVBbkJNLGlCQUFpQixLQUFqQixpQkFBaUIsUUFtQnZCIiwiZmlsZSI6IlN3YXBpL1N3YXBpQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlN3YXBpU2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgQW5ndWxhclR5cGVzY3JpcHR7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTd2FwaUNvbnRyb2xsZXIge1xyXG4gICAgICAgIGZpbG1zOiBGaWxtW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBTd2FwaUNvbnRyb2xsZXIgaW1wbGVtZW50cyBJU3dhcGlDb250cm9sbGVye1xyXG4gICAgICAgIGZpbG1zOiBGaWxtW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3RhdGljICRpbmplY3QgPSBbXCJTd2FwaVNlcnZpY2VcIl07XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBzd2FwaVNlcnZpY2U6IElTd2FwaVNlcnZpY2UpIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dhcGlTZXJ2aWNlLmdldEZpbG1zKCkudGhlbigoZGF0YTogRmlsbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbG1zID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcblx0ICAgIH1cclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAubW9kdWxlKFwiQW5ndWxhclR5cGVzY3JpcHRcIilcclxuICAgICAgIC5jb250cm9sbGVyKFwiU3dhcGlDb250cm9sbGVyXCIsIFN3YXBpQ29udHJvbGxlcik7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
