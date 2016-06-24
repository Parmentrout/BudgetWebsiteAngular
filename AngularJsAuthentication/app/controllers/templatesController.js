'use strict';
app.controller('templatesController', [
        '$scope','expensesService', function ($scope, expensesService) {

            $scope.templates = [
                { value: "1", name: "Paycheck 1"},
                { value: "2", name: "Paycheck 2" },
                { value: "3", name: "Paycheck 3" }
            ];

            $scope.categories = [
               { name: 'To Savings' },
               { name: 'Bills' },
               { name: 'Groceries' },
               { name: 'Gas' },
               { name: 'Coffee' },
               { name: 'Baby' },
               { name: 'Misc' },
               { name: 'Home' },
               { name: 'Restaurants' },
               { name: 'Charity' },
               { name: 'Clothing/Wellness' }
            ];
        $scope.templateRows = [];
        
        $scope.saveTemplate = function() {
           //Persist templateRows to db
        };

        $scope.templateSelected = function() {
            alert($scope.templateName.value);
        };

        $scope.addRow = function () {
            $scope.templateRows.push({});
        }

    }]);