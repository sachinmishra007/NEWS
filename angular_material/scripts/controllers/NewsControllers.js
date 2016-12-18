


angular.module("NewsAPI.controllers", [])
    .controller("NewsAPIController", function ($scope, $document, $q, $window, $interval, $timeout, $log, NewsAPIKey, NewsAPIServices, $mdSidenav, $mdBottomSheet) {

        $scope.NewsAPISource = {};
        $scope.NewsAPISourceContent = {};
        $scope.SourceTitleName;
        $scope.IsNewsVisible = false;
        $scope.LogMe = function (_strMessageToLog) {
            $log.debug("Log Message : " + _strMessageToLog);
        };

        NewsAPIServices
        .GetNewsAPISource()
        .success(function (_result) {
            $scope.NewsAPISource = _result;
        })
        .error(function (_error) {
            $scope.LogMe(_error);
        });


        $scope.GetNewsContentData = function (_sourceName, _title) {
            $scope.SourceTitleName = _title;
            NewsAPIServices
        .GetNewsJsonDataFromSource(_sourceName)
        .success(function (_result) {
            $scope.NewsAPISourceContent = _result.articles;
            $log.info($scope.NewsAPISourceContent);
            //$mdSidenav('left').toggle();
            $mdSidenav('left').close();
            $scope.IsNewsVisible = true;
        })
        .error(function (_error) {
            $scope.LogMe(_error);
        });
        };
        $scope.GetNewsContentData('abc-news-au','ABC News (AU) general / en');

        $scope.toggleList = function () {
            $mdSidenav('left').toggle();
        };


    });