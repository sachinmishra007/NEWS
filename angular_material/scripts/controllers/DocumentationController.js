

angular.module("NewsAPI.controllers", [])
.controller("DocumentationController", function ($scope, $log, $window, $timeout, $interval, $document, NewsAPIServices, $mdToast) {
    $scope.IsNewsVisible = true;
    $scope.ResultData = {};
    $scope.HidePanel = false;
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $scope.colorName = "{'background-color':'" + getRandomColor() + "'}";

    function WelcomeScreenAnimation(x) {
        $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function newsApp(x) {
        $('#newsapp').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
            //$(this).addClass('butt js--triggerAnimation');

        });
    }

    function weatherapp(x) {
        $('#weatherapp').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();

        });
    }

    function weatherapp(x) {
        $('#weatherapp').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();

        });
    }

    function labeltoDisplay(x) {
        $('#labeltoDisplay').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();

        });
    }

    function mainImage(x) {
        $('#mainImage').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();

        });
    }

    WelcomeScreenAnimation('bounceInDown');

    $timeout(function () {
        newsApp('bounceInLeft');
        weatherapp('bounceInRight');
        labeltoDisplay('bounceInUp');
        mainImage('zoomIn');
    }, 300);

    $scope.ClickOnLetsExploreButton = function (_url) {
        WelcomeScreenAnimation('bounceOutUp');
        newsApp('bounceOutLeft');
        weatherapp('bounceOutRight');
        labeltoDisplay('bounceOutDown');
        mainImage('zoomOut');
        $timeout(function () {
            $window.location = _url + '.html';
        }, 1000);
    };


    $scope.DirectOnSolo = function () {
        $window.open('https://www.sololearn.com/Profile/3059838#', '_blank');
    }

    $scope.animateForecast = function (x) {


        $('#Span14').addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            //$(this).removeClass();
        });


        $('#Span1,#Span2,#Span3,#Span4,#Span5').addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            //$(this).removeClass();
        });

        $timeout(function () {
            x = 'zoomInRight';
            $('#Span6,#Span7,#Span8,#Span9').addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                //$(this).removeClass();
            });
            x = 'bounceInDown';
            $('#Span10,#Span11,#Span12,#Span13').addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                //$(this).removeClass();
            });

            x = 'zoomInRight';
            $('#span16').addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                //$(this).removeClass();
            });
        }, 200);




    }

    $scope.SearchTextForCountry = function (_placeName) {

        if (_placeName == "" || !angular.isDefined(_placeName)) {

            var Toast = $mdToast.simple()
                        .textContent("Please Valid State Name")
                        .action('Okay')
                        .highlightAction(true);

            $mdToast.show(Toast).then(function (response) {                
                if (response == "ok") {
                    $scope.HidePanel = false;
                }
            });


        }
        else {

            var _urla = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + _placeName + "')";
            $scope.IsNewsVisible = false;
            NewsAPIServices
           .GetWeatherInformation(_urla)
           .success(function (_result) {
               $scope.ResultData = _result.query.results.channel;
               $scope.IsNewsVisible = true;
               $scope.HidePanel = true;
               $scope.animateForecast('zoomInLeft');
               //$log.info($scope.ResultData);
           })
           .error(function (_error) {
               $log.info(_error);
           });
        }
    };

    $scope.TextChangesEvent = function (stringValue) {        
        if (stringValue.length == 0) {
            $scope.HidePanel = false;
        }
    };



});