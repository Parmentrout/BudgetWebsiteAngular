'use strict';
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
                    cellTemplate: '<button class="btn btn-small" ng-click="grid.appScope.Delete(row)">Delete</button>'
                }
            ];

            //$scope.gridOptions.paginationPageSizes = [25, 50, 75];
            //$scope.gridOptions.paginationPageSize = 10;

            $scope.expense = {};

            $scope.categories = [
                { name: 'To Savings' },
                { name: 'Bills' },
                { name: 'Groceries' },
                { name: 'Gas' },
                { name: 'Coffee' },
                { name: 'Baby' },
                { name: 'Misc' }
            ];
         
            expensesService.getExpenses().then(function (results) {
                    $scope.gridOptions.data = results.data;
                }, function (error) {
                    alert(error.data.message);
                });


            $scope.submitData = function(expense, resultVarName) {
              
                expense.category = expense.categoryWrapper.name;

                $scope.gridOptions.data.push({
                    "charge": expense.charge,
                    "amount": expense.amount,
                    "category": expense.category,
                    "modifiedDate": GetCurrentDate()
                });

                expensesService.createExpense(expense).then(function() {
                    toastr["success"]("Saved Expense!");
                });

                //$http.post("/api/orders/PostExpense", { 'parameter': expense }, config)
                //    .success(function() {
                //        toastr["success"]("Saved Expense!");
                //    });
            }

            $scope.Delete = function(row) {
                var index = $scope.gridOptions.data.indexOf(row.entity);
                $scope.gridOptions.data.splice(index, 1);
                var expense = row.entity;
                var config = {
                    params: {
                        expense
                    }
                };

                $http.post("/api/orders/DeleteExpense", { 'parameter': expense }, config)
                    .success(function() {
                        toastr["error"]("Deleted!");
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
//$scope.orders = [];

    //ordersService.getOrders().then(function (results) {

    //    $scope.orders = results.data;

    //}, function (error) {
    //    //alert(error.data.message);
    //});



