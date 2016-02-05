(function() {
    'use strict';
    angular.module('xenon-frontend')
            .factory('language', language);
    function language($localStorage, $translate) {
        var service = {};
        var countries = {
            "ES": "Spanish",
            "DE": "German",
            "FR": "French",
            "DK": "Danish",
            "FI": "Finnish",
            "NO": "Norwegian",
            "SE": "Swedish",
            "GB": "English"
        }
        service.set = function(value) {
            console.log(value);
            var selected;
            for (var key in countries) {
                if (value == key) {
                    var selected = key;
                }
            }
            console.log(countries[selected]);
            console.log(selected);
            $translate.use(countries[selected]);
            $localStorage['used'] = countries[selected];
            $localStorage['keyOfused'] = selected;
            console.log(countries);
        }
        service.get = function(value) {
            console.log(value);
            var selected;
            for (var key in countries)
            {
                if (countries[key] == value)
                    console.log(key);
            }
            $localStorage['used'] = value;
            $localStorage['keyOfused'] = key;
              $translate.use(value);

        }

        return service;
    }
})();