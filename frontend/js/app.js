/**
 * Created by Cosmin on 8/9/2016.
 */


(function(){
    'use strict';
    angular.module('subApp',['ui.router'])
        .config(config)
    function config($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/")
        $stateProvider.state("change",
            {
                url:"/",
                templateUrl:"templates/change.html",
                controller:"MainController"
            })
    }
})()