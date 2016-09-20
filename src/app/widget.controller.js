 "use strict";

(function() {
    var widgetApp = angular.module("widgetApp");

    widgetApp.controller("WidgetController", WidgetController);

    WidgetController.$inject = ["dataService", "nutritionFactory"];

    function WidgetController(dataService, nutritionFactory) {
        var scope = this;
        scope.nutritions = [];
        scope.nutritionsSummary = [];

        activate();

        function activate() {
            var productId = getProductId();
            getNutritions(productId);
        }

        function getProductId() {
            return location.hash.replace(/#/, "")
        }

        function getNutritions(productId) {
            dataService.getNutrientsByProductId(productId)
                .then(function(data) { 
                    scope.nutritions = nutritionFactory.createNutritions(data);
                    scope.nutritionsSummary = nutritionFactory.createNutritionsSummary(data);
                });
        }
    }
})();