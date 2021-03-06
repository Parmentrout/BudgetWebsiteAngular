﻿'use strict';
app.controller('expensesController', [
        '$scope', 'expensesService', function ($scope, expensesService) {

            $scope.gridOptions = {};

            $scope.gridOptions.columnDefs = [
                {
                    name: 'Charge',
                    field: 'charge'
                }, {
                    name: 'Amount',
                    field: 'amount'
                }, {
                    name: 'Category',
                    field: 'category'
                },
                {
                    name: 'Date',
                    field: 'modifiedDate'
                }, {
                    name: 'Delete',
                    cellTemplate: '<span class="glyphicon glyphicon-trash" ng-click="grid.appScope.Delete(row)"></span>'
                }
            ];

            $scope.expense = {};

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
                { name: 'Clothing/Wellness'}
            ];
            
            //Read
            expensesService.getExpenses().then(function (results) {
                    $scope.gridOptions.data = results.data;
                }, function (error) {
                    alert(error.data.message);
                });

            //Update
            $scope.gridOptions.onRegisterApi = function (gridApi) {
                $scope.gridApi = gridApi;
                gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
            };

            $scope.saveRow = function (rowEntity) {
                var promise = expensesService.updateExpense(rowEntity);
                $scope.gridApi.rowEdit.setSavePromise($scope.gridApi.grid, rowEntity, promise);
            };

           
            //Create
            $scope.submitData = function (model){
                model.Category = model.categoryWrapper.name;
                expensesService.createExpense(model).then(function (results) {
                    $scope.gridOptions.data.push(results.data);
                    toastr["success"]("Saved Expense!");
                });
            };

            //Delete
            $scope.Delete = function(row) {
                var index = $scope.gridOptions.data.indexOf(row.entity);
                $scope.gridOptions.data.splice(index, 1);
                var currentExpense = row.entity;
                expensesService.deleteExpense(currentExpense).then(function () {
                    toastr["success"]("Deleted Expense");
                });
            };
        }]);


function GetCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' + yyyy;

    return today;
}




