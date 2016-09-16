"use strict";

(function() {
    var nutrientsClassName = "syndy-nutrients";
    var requiredAttributeName = "product-id";

    var nutrients = document.getElementsByClassName(nutrientsClassName);

    for(var i = 0, length = nutrients.length; i++) {
        var element = nutrients[i];
        if(!element.hasAttribute(requiredAttributeName)) {
            continue;
        }

        var widgetFrame = document.createElement("iframe");
        element.appendChild(widgetFrame);
        loadWidget(widgetFrame);
    }

    function loadWidget(widgetFrame) {
        
    }
})();