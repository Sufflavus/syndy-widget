 "use strict";

(function() {
    var widgetApp = angular.module("widgetApp");

    widgetApp.factory("nutritionFactory", nutritionFactory);

    function nutritionFactory() {

        return {
            createNutritions: createNutritions,
            createNutritionsSummary: createNutritionsSummary
        };

        function createNutritions(data) {
            return data.map(function(item) {
                var nutrition = clone(item);

                if(nutrition.share.perThertyGram) {
                    nutrition.share.perThertyGramLabel = "(" + nutrition.share.perThertyGram + ")";
                }
                
                return nutrition;
            });
        }

        function createNutritionsSummary(data) {
            var nutritionGroups = groupNutritionsById(data);

            var neededNutritions = nutritionGroups.filter(function(group, index) {
                return group.values.some(function(value) {
                    return !!value.share.perThertyGram;
                });
            })

            var result = neededNutritions.map(function(group) {
                var nutrition = group.values[0];
                var perPortionShares = group.values.map(function(value) {
                    return value.share.perPortion;
                });
                var itemsWithSharePerThertyGram = group.values.filter(function(value) {
                    return !!value.share.perThertyGram;
                });
                return {
                    name: nutrition.shortName,
                    share: {
                        perPortion: perPortionShares,
                        perThertyGram: itemsWithSharePerThertyGram[0].share.perThertyGram
                    }
                };
            });

            return result;
        }

        function groupNutritionsById(data) {
            return data.reduce(function(array, nutrition) {
                var key = nutrition.id;

                var hasKey = array.some(function(item) {
                    return item.key === key ? ((item.values.push(nutrition)), true) : false;
                });

                if(!hasKey){
                    array.push({ key: key, values: [nutrition] });
                }

                return array;
            }, []);
        }

        function clone(obj) {
            return JSON.parse(JSON.stringify(obj));
        }
    }  
})();