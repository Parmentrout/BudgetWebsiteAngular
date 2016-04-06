'use strict';
app.factory('expensesService', ['$http', function ($http) {
 
    var serviceBase = 'http://localhost:61721/';
    var expensesServiceFactory = {};


    var _getExpenses = function() {
        return $http.get(serviceBase + 'api/expenses').then(function(results) {
            return results;
        });
    };

    var _createExpense = function (expense) {
        var config = {
            params: {
                expense
            }
        };
        return $http.post(serviceBase + 'api/expenses/CreateExpense', {'parameter': expense}, config).then(function (results) {
            return results;
        });
    };
 
    expensesServiceFactory.getExpenses = _getExpenses;
    expensesServiceFactory.createExpense = _createExpense;
 
    return expensesServiceFactory;
 
}]);