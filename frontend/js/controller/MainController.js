/**
 * Created by Cosmin on 8/9/2016.
 */

(function(){
    'use strict';
    angular.module('subApp')
        .controller("MainController",MainController)

    MainController.$inject = ['$scope']

    function MainController($scope){

        $scope.computeChange = function(amount){

            for(var i = $scope.values.length-1; i > 0; i--){
                $scope.change[i].value = Math.floor(amount / $scope.values[i].value);
                amount -= $scope.change[i].value * $scope.values[i].value;
            }
            $scope.change[0].value = Math.round(amount*100);
            console.log($scope.change)
        }

        $scope.computeAvailable = function(amount){
            var totalAvailable = 0;
            angular.forEach($scope.change, function(value, key){
                value.value = 0;
            })
            $scope.error.errorMessage = ""
            for(var i=0;i<$scope.availableMoney.length - 1; i++){
                if(i<=2){
                    totalAvailable += ($scope.availableMoney[i].value * $scope.availableMoney[i].available * 100);
                }
                if(i>2 && i<=5){
                    totalAvailable += ($scope.availableMoney[i].value * $scope.availableMoney[i].available * 1000);
                }
                if(i>5){
                    totalAvailable += ($scope.availableMoney[i].value * $scope.availableMoney[i].available * 10000);
                }
            }
            if(totalAvailable >= (amount*100)) {
                for (var i = $scope.values.length - 1; i > 0; i--) {
                    var maxAmount = 0;
                    var minAmount = 0;
                    maxAmount = Math.floor(amount / $scope.availableMoney[i].value);

                    if(maxAmount > $scope.availableMoney[i].available){
                        minAmount = $scope.availableMoney[i].available
                        $scope.change[i].value = minAmount;
                        amount -= $scope.availableMoney[i].value * minAmount;
                        amount += 0.00000001  //minimal standard error
                        $scope.availableMoney[i].available -= minAmount;
                    }
                    else {
                        minAmount = maxAmount;
                        amount -= $scope.availableMoney[i].value * minAmount;
                        amount += 0.00000001 //minimal standard error
                        $scope.change[i].value=minAmount;
                        $scope.availableMoney[i].available -= minAmount;
                    }
                }
                if(amount > 0.01){
                    angular.forEach($scope.change,function(value,key){
                        $scope.availableMoney[key] += value.value
                    })
                    $scope.error.errorMessage = "We cannot provide you the change"
                    throw new Error("Not enough change")
                }
            }
            else {
                $scope.error.errorMessage = "Out of service"
                throw new Error('Not enough money');
            }
        }


        $scope.error = {
            errorMessage: ""
        }
        $scope.valid = {
            amount: 0,
            validity: true
        }
        $scope.change = [
            {value: 0, name:"One penny"},
            {value: 0, name:"Two pence"},
            {value: 0, name:"Five pence"},
            {value: 0, name:"Ten pence"},
            {value: 0, name:"Twenty pence"},
            {value: 0, name:"Fifty pence"},
            {value: 0, name:"One pound"}
        ]
        $scope.availableMoney = [
            {value: 0.01, available: 23,name:"One penny"},
            {value: 0.02, available: 11, name: "Two pence"},
            {value: 0.05, available: 200, name: "Five Pence"},
            {value: 0.1, available: 99, name:"Ten pence"},
            {value: 0.2, available: 0, name:"Twenty pence"},
            {value: 0.5, available: 24, name:"Fifty pence"},
            {value: 1, available: 11, name: "One Pound"}
        ]
        $scope.values = [
            {value: 0.01, name:"One penny"},
            {value: 0.02, name:"Two pence"},
            {value: 0.05, name:"Five pence"},
            {value: 0.1, name:"Ten pence"},
            {value: 0.2, name:"Twenty pence"},
            {value: 0.5, name:"Fifty pence"},
            {value: 1, name:"One pound"}
        ]
    }
})()