'use strict';
app.controller('templatesController', [
        '$scope', function ($scope) {
            $scope.hello = "Hello World";
            scope.templates = [
                {name: "Paycheck 1"},
                { name: "Paycheck 2" },
                { name: "Paycheck 3" }
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
}]);