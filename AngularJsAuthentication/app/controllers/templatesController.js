'use strict';
app.controller('templatesController', [
        '$scope', function ($scope) {
            $scope.hello = "Hello World";
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
        $scope.templateRows = {};

        $scope.saveTemplate = function(model) {

        };

        $scope.templateSelected = function() {
            alert($scope.templateName.value);
        };

        $scope.addRow = function () {
            $scope.templateRows.push({});
        }

        /*$scope.templateSelected = function () {
    if ($scope.optionTemplate !== null) {
        var selectedOption = $scope.optionTemplate.Value;
        TemplateService.getTemplateData(selectedOption).then(function(viewModel) {
            $scope.template = viewModel.data;
        });
    } else {
        $scope.template = null;
    }
};
 <select class="form-control" id="templateSelect" ng-model="optionTemplate" ng-change="templateSelected()" ng-options="value.Text for value in AllTemplates">
                        <option value="">--Select a Template--</option>
                    </select>
*/
    }]);