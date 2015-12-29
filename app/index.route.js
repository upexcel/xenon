(function() {
   'use strict';
   angular.module('xenon-app')
   .config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, ASSETS){

    
    $stateProvider.
    state('dashboard', {
            url: '/dashboard',
            templateUrl: "app/navbar/navbar.html",
            abstract : true,
            controller: function($rootScope){
                $rootScope.isLoginPage        = false;
                $rootScope.isLightLoginPage   = false;
                $rootScope.isLockscreenPage   = false;
                $rootScope.isMainPage         = true;
            },
            resolve: {
                bootstrap: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.core.bootstrap,
                    ]);
                }
            },
            controller: 'navbarController'
        }).
    state('dashboard.login', {
            url: '/login',
            templateUrl: "app/login/login.html",
            controller: 'LoginLightCtrl',
            resolve: {
                resources: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.forms.jQueryValidate,
                    ]);
                },
            }
        }).
    state('dashboard.singup', {
            url: '/signup',
            templateUrl: "app/signup/signup.html",
            controller: 'signupCtrl',
            resolve: {
                resources: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.forms.jQueryValidate,
                    ]);
                },
            }
        }).
    state('dashboard.setting', {
            url: '/setting',
            templateUrl: 'app/setting/setting.html',
            controller: 'settingController',
        }).
    state('dashboard.payment', {
            url: '/payment',
            templateUrl: 'app/payment/payment.html',
            controller: 'paymentController',
        }).
    state('dashboard.productList', {
            url: '/productList',
            templateUrl: 'app/productlist/productlist.html',
            controller: 'productListController',
        }).
    state('dashboard.addProduct', {
            url: '/addProduct',
            templateUrl: 'app/addproduct/addproduct.html',
            resolve: {
                bootstrap: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.core.bootstrap,
                    ]);
                },
                bootstrapWysihtml5: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.forms.bootstrapWysihtml5,
                    ]);
                },
                uikit: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.uikit.base,
                        ASSETS.uikit.codemirror,
                        ASSETS.uikit.marked,
                    ]);
                },
                uikitHtmlEditor: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.uikit.htmleditor,
                    ]);
                },
            },
            controller: 'addProductController',
        }).
    state('dashboard.productOrders', {
            url: '/productOrders',
            templateUrl: 'app/productorders/productorders.html',
            controller: 'productOrdersController',
        }).
    state('dashboard.orderDetails', {
            url: '/orderDetails',
            templateUrl: 'app/orderdetails/orderdetails.html',
            controller: 'orderDetailsController',
        }).
        state('dashboard.storeinfo', {
            url: '/storeinfo',
            templateUrl: "app/storeinfo/storeinfo.html",
            controller: 'storeinfoCtrl',

        resolve: {
                bootstrap: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.core.bootstrap,
                    ]);
                },
                bootstrapWysihtml5: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.forms.bootstrapWysihtml5,
                    ]);
                },
                uikit: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.uikit.base,
                        ASSETS.uikit.codemirror,
                        ASSETS.uikit.marked,
                    ]);
                },
                uikitHtmlEditor: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.uikit.htmleditor,
                    ]);
                },
            }
        }).
    state('dashboard.reset', {
            url: '/reset',
            templateUrl: "app/resetpassword/reset.html",
            controller: 'LoginLightCtrl',
            resolve: {
                resources: function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        ASSETS.forms.jQueryValidate,
                    ]);
                },
            }
        });
    $urlRouterProvider.otherwise('/dashboard/login');

});

})();