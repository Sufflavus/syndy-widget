"use strict";

(function() {
    var nutrientsClassName = "syndy-nutrients";
    var requiredAttributeName = "product-id";
    var contentUri = "/src/widget.html";
    var widgetWidth = "500px";
    var widgetHeight = "700px";

    var nutrients = document.getElementsByClassName(nutrientsClassName);

    for(var i = 0, length = nutrients.length; i < length; i++) {
        var element = nutrients[i];
        if(!element.hasAttribute(requiredAttributeName)) {
            continue;
        }

        var widgetFrame = createIframe();
        element.appendChild(widgetFrame);
    }

    function createIframe() {
        var widgetFrame = document.createElement("iframe");
        widgetFrame.setAttribute("src", contentUri);
        widgetFrame.style.width = widgetWidth;
        widgetFrame.style.height = widgetHeight;
        widgetFrame.style.border = 0;
        widgetFrame.style.frameborder = 0;
        widgetFrame.style.overflow = "hidden";
        return widgetFrame;
    }
})();