'use strict';
app.controller('templatesController', [
        '$scope','expensesService', function ($scope, expensesService) {

            $scope.templates = [
                { value: "1", name: "Paycheck 1"},
                { value: "2", name: "Paycheck 2" },
                { value: "3", name: "Paycheck 3" }
            ];

            $scope.categories = [
               'To Savings', "Bills", 'Restaurants', 'Groceries', 'Gas', 'Coffee', 'Home'
            ];
        $scope.templateRows = [];
        
        $scope.saveTemplate = function () {
            var model = $scope.templateRows;

            for (var i = 0; i < model.length; i++) {
                model[i].TemplateId = $scope.templateName.value;
            }

            expensesService.saveTemplate(model);
        };

        $scope.templateSelected = function () {
            //Get template data
            expensesService.getTemplate($scope.templateName.value).then(function (results) {
                $scope.templateRows = results.data;
        })};

        $scope.addRow = function () {
            $scope.templateRows.push({});
        }

    }]);