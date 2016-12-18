
angular.module("NewsAPI.services", [])
.factory("NewsAPIServices", function ($http, NewsAPIKey) {

    var NewsAPIServices = {};

    NewsAPIServices.GetNewsAPISource = function () {
        return $http({
            datatype: 'JSON',
            method: 'GET',
            url: '/NEWS/angular_material/scripts/jsondata/NewsSources.json',
            cache: false
        });
    };


    NewsAPIServices.GetNewsJsonDataFromSource = function (_sourceName) {
      //  console.log(NewsAPIKey.UrlBefore + _sourceName + NewsAPIKey.UrlAfter + NewsAPIKey.APIGeneratedKey);
        return $http({
            datatype: 'JSON',
            method: 'GET',
            url: NewsAPIKey.UrlBefore + _sourceName + NewsAPIKey.UrlAfter + NewsAPIKey.APIGeneratedKey,            
        });
    };

    return NewsAPIServices;
});
