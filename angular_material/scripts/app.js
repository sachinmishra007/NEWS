
var NewsAPI = angular.module("NewsAPI", [
    'ngMaterial',
    'NewsAPI.controllers',
    'NewsAPI.services',
]);

angular.module("NewsAPI.services", []);
angular.module("NewsAPI.controllers", []);
NewsAPI.constant("NewsAPIKey", {
    'APIGeneratedKey': '52787d90c4af4d6d8c7adc06d08ce4b7',
    'UrlBefore': 'https://newsapi.org/v1/articles?source=',
    'UrlAfter': '&sortBy=top&apiKey='
});

NewsAPI.config(function ($mdThemingProvider, $mdIconProvider) {
    $mdIconProvider
    .defaultIconSet("./assets/svg/avatars.svg", 128)
    .icon("menu", "./angular_img/menu.svg", 24)
    .icon("info", "./angular_img/info.svg", 18)
    .icon("google_plus", "./assets/svg/google_plus.svg", 512)
    .icon("hangouts", "./assets/svg/hangouts.svg", 512)
    .icon("twitter", "./assets/svg/twitter.svg", 512)
    .icon("phone", "./assets/svg/phone.svg", 512);
    $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
});