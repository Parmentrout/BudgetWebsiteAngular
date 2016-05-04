'use strict';
app.factory('expensesService', ['$http', function ($http) {
 
    var serviceBase = 'http://localhost:61721/';
    var expensesServiceFactory = {};


    var _getExpenses = function() {
        return $http.get(serviceBase + 'api/expenses').then(function(results) {
            return results;
        });
    };

    var _createExpense = function (model) {
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        var data = model;
        return $http.post(serviceBase + 'api/expenses/PostExpense', data, config).then(function (results) {
            return results;
        });
    };

    var _deleteExpense = function (model) {
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        var data = model;
        return $http.post(serviceBase + 'api/expenses/DeleteExpense', data, config).then(function (results) {
            return results;
        });
    };

    var _updateExpense = function (model) {
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        var data = model;
        return $http.post(serviceBase + 'api/expenses/UpdateExpense', data, config).then(function (results) {
            return results;
        });
    };
 
    expensesServiceFactory.getExpenses = _getExpenses;
    expensesServiceFactory.createExpense = _createExpense;
    expensesServiceFactory.deleteExpense = _deleteExpense;
    expensesServiceFactory.updateExpense = _updateExpense;

 
    return expensesServiceFactory;
 
}]);