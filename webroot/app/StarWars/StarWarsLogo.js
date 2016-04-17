/// <reference path="../../typings/tsd.d.ts" />
var AngularTypescript;
(function (AngularTypescript) {
    var StarWarsLogo = (function () {
        function StarWarsLogo() {
            this.templateUrl = 'app/StarWars/starwarsLogo.html';
            this.restrict = 'E';
            this.scope = {
                height: '@',
                width: '@'
            };
        }
        return StarWarsLogo;
    }());
    angular
        .module("AngularTypescript")
        .directive("starwarsLogo", function () { return new StarWarsLogo(); });
})(AngularTypescript || (AngularTypescript = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0YXJXYXJzL1N0YXJXYXJzTG9nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFFL0MsSUFBTyxpQkFBaUIsQ0FjdkI7QUFkRCxXQUFPLGlCQUFpQixFQUFBLENBQUM7SUFDcEI7UUFDSTtZQUNELGdCQUFXLEdBQUcsZ0NBQWdDLENBQUM7WUFDL0MsYUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNmLFVBQUssR0FBRztnQkFDQyxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsR0FBRzthQUNkLENBQUM7UUFOVSxDQUFDO1FBT3JCLG1CQUFDO0lBQUQsQ0FSQyxBQVFBLElBQUE7SUFFRCxPQUFPO1NBQ0gsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1NBQzNCLFNBQVMsQ0FBQyxjQUFjLEVBQUUsY0FBTSxPQUFBLElBQUksWUFBWSxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztBQUM1RCxDQUFDLEVBZE0saUJBQWlCLEtBQWpCLGlCQUFpQixRQWN2QiIsImZpbGUiOiJTdGFyV2Fycy9TdGFyV2Fyc0xvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgQW5ndWxhclR5cGVzY3JpcHR7XHJcbiAgICAgY2xhc3MgU3RhcldhcnNMb2dvIGltcGxlbWVudHMgYW5ndWxhci5JRGlyZWN0aXZlIHtcclxuICAgICAgICAgY29uc3RydWN0b3IoKSB7fVxyXG4gICAgICAgIHRlbXBsYXRlVXJsID0gJ2FwcC9TdGFyV2Fycy9zdGFyd2Fyc0xvZ28uaHRtbCc7XHJcbiAgICAgICAgcmVzdHJpY3QgPSAnRSc7XHJcbiAgICAgICAgc2NvcGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnQCcsXHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6ICdAJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAubW9kdWxlKFwiQW5ndWxhclR5cGVzY3JpcHRcIilcclxuICAgICAgIC5kaXJlY3RpdmUoXCJzdGFyd2Fyc0xvZ29cIiwgKCkgPT4gbmV3IFN0YXJXYXJzTG9nbygpKTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
