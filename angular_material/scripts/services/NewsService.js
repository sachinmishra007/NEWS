
angular.module("NewsAPI.services", [])
.factory("NewsAPIServices", function ($http, NewsAPIKey) {

    var NewsAPIServices = {};
    var APIKeyResult = "AIzaSyAIhT-L1hn07zsPQGCh0S-GnXTeFtphUWs";
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };


    NewsAPIServices.GetNewsAPISource = function () {
        return $http({
            datatype: 'JSON',
            method: 'GET',
            url: 'angular_material/scripts/jsondata/NewsSources.json',
            cache: false
        });
    };


    NewsAPIServices.GetNewsJsonDataFromSource = function (_sourceName) {
        //console.log(NewsAPIKey.UrlBefore + _sourceName + NewsAPIKey.UrlAfter + NewsAPIKey.APIGeneratedKey);
        return $http({
            datatype: 'JSON',
            method: 'GET',
            url: NewsAPIKey.UrlBefore + _sourceName + NewsAPIKey.UrlAfter + NewsAPIKey.APIGeneratedKey,
        });
    };

    NewsAPIServices.GetPlaceInformation = function (_placeName) {
        return $http({
            datatype: 'JSON',
            method: 'GET',
            headers: headers,
            url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + _placeName + '&key=' + APIKeyResult,
        });
    };

    NewsAPIServices.GetWeatherInformation = function (_url) {
        return $http(
            {
                method: 'GET',
                datatype: 'JSON',
                url: 'https://query.yahooapis.com/v1/public/yql?q=' + _url + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",
                cache: false
            });
    }

    NewsAPIServices.GetCountriesList = function () {
        return $http(
            {
                method: 'GET',
                datatype: 'JSON',
                url: 'https://restcountries.eu/rest/v1/all',
                cache: false
            });
    };

    NewsAPIServices.GetCityList = function () {
        return $http(
            {
                method: 'GET',
                datatype: 'JSON',
                url: 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json',
                cache: false
            });
    };

    return NewsAPIServices;
});