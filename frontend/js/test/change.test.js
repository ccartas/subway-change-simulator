/**
 * Created by Cosmin on 8/9/2016.
 */


describe("Testing Change Calculator", function(){
    var mainController;
    var scope;
    beforeEach(module('subApp'))
    describe('MainController', function(){
    beforeEach(inject(function($controller,$rootScope){
        scope = $rootScope.$new();
        mainController = $controller("MainController",{
           $scope : scope

        })
    }))
    it('Check if the system initialized correctly',function(){
        expect(scope.availableMoney[6].available).toBe(11)
        expect(scope.availableMoney[5].available).toBe(24)
        expect(scope.availableMoney[4].available).toBe(0)
        expect(scope.availableMoney[3].available).toBe(99)
        expect(scope.availableMoney[2].available).toBe(200)
        expect(scope.availableMoney[1].available).toBe(11)
        expect(scope.availableMoney[0].available).toBe(23)

        //check that all change fields are equal to 0
        for(var i=0;i<scope.change.length;i++){
            expect(scope.change[i].value).toBe(0)
        }

    })
     it('Performing multiple transactions', function(){
         scope.computeAvailable(15.34)
         expect(scope.change).toEqual([
             {value: 0, name:"One penny"},
             {value: 2, name:"Two pence"},
             {value: 0, name:"Five pence"},
             {value: 3, name:"Ten pence"},
             {value: 0, name:"Twenty pence"},
             {value: 8, name:"Fifty pence"},
             {value: 11, name:"One pound"}
         ])
         scope.computeAvailable(0.25)
         expect(scope.change).toEqual([
             {value: 0, name:"One penny"},
             {value: 0, name:"Two pence"},
             {value: 1, name:"Five pence"},
             {value: 2, name:"Ten pence"},
             {value: 0, name:"Twenty pence"},
             {value: 0, name:"Fifty pence"},
             {value: 0, name:"One pound"}
         ])
         scope.computeAvailable(0.62)
         expect(scope.change).toEqual([
             {value: 0, name:"One penny"},
             {value: 1, name:"Two pence"},
             {value: 0, name:"Five pence"},
             {value: 1, name:"Ten pence"},
             {value: 0, name:"Twenty pence"},
             {value: 1, name:"Fifty pence"},
             {value: 0, name:"One pound"}
         ])
     })
        it('Testing exception throwing', function(){
            expect(function() {
                scope.computeAvailable(2000)

            }).toThrow(new Error("Not enough money"));
            scope.computeAvailable(30)
            expect(function(){
                scope.computeAvailable(12.95)
            }).toThrow(new Error("Not enough change"))
        })
    })

})