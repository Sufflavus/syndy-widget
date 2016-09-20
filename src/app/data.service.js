 "use strict";

(function() {
    var widgetApp = angular.module("widgetApp");

    widgetApp.factory("dataService", dataService);

    function dataService($q, $http) {

        return {
            getNutrientsByProductId: getNutrientsByProductId,
            logPageView: logPageView
        };    

        function getNutrientsByProductId(productId) {
            //return $http.get("/GetNutrientsByProductId", { productId: productId });

            //FAKE
            var deferred = $q.defer();
            deferred.resolve(getData());
            return deferred.promise;

            function getData() {
              return [{
                  id: "c1e95e44-3a34-4b09-b928-fbc1c015e073",
                  name: "Energie",
                  shortName: "Energie",
                  share: {
                      perHundredGram: "1831 kJ",
                      perPortion: "594 kJ"
                  }
              }, {
                  id: "c1e95e44-3a34-4b09-b928-fbc1c015e073",
                  name: "Energie",
                  shortName: "Energie",
                  share: {
                      perHundredGram: "436 kcal",
                      perPortion: "131 kcal",
                      perThertyGram: "7 %",
                  }
              }, {
                  id: "a337b572-8b68-4b96-9990-5e9b2ce78b3f",
                  name: "Vetten",
                  shortName: "Vetten",
                  share: {
                      perHundredGram: "15 g",
                      perPortion: "4,5 g",
                      perThertyGram: "6 %",
                  }
              }, {
                  id: "f9fb1712-4c82-41f7-89cb-c760893a6f1d",
                  name: "Waarvan verzadigd",
                  shortName: "Verzadigd",
                  share: {
                      perHundredGram: "1,4 g",
                      perPortion: "<0,5 g",
                      perThertyGram: "2 %",
                  }
              }, {
                  id: "15ba1df2-a2b2-4eab-904b-dead3fdc084c",
                  name: "Koolhydraten",
                  shortName: "Koolhydraten",
                  share: {
                      perHundredGram: "66 g",
                      perPortion: "20 g"
                  }
              }, {
                  id: "0066d61a-27c9-45aa-ba30-78a9ac0e30af",
                  name: "Waarvan Suikers",
                  shortName: "Suikers",
                  share: {
                      perHundredGram: "13 g",
                      perPortion: "3,9 g",
                      perThertyGram: "4 %",
                  }
              }, {
                  id: "7dec0f62-4fea-4c61-a8d9-b92732f0e89c",
                  name: "Vezels",
                  shortName: "Vezels",
                  share: {
                      perHundredGram: "3,7 g",
                      perPortion: "1,1 g"
                  }
              }, {
                  id: "cb7afd9a-de75-48ca-9945-3c675e8599ab",
                  name: "Eiwitten",
                  shortName: "Eiwitten",
                  share: {
                      perHundredGram: "7,3 g",
                      perPortion: "2,2 g"
                  }
              }, {
                  id: "7d2ed20f-f31c-42b5-a3c9-ecbc67a4260c",
                  name: "Zout",
                  shortName: "Zout",
                  share: {
                      perHundredGram: "2,4 g",
                      perPortion: "0,7 g",
                      perThertyGram: "12 %",
                  }
              }];
            }
        }

        function logPageView(productId, pageViewData) {
            return $http.post("/LogPageView", { productId: productId, pageViewData: pageViewData });
        }
    }
})();