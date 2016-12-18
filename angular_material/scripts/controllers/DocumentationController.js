﻿

angular.module("NewsAPI.controllers", [])
.controller("DocumentationController", function ($scope, $log, $window, $timeout, $interval, $document) {



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





});