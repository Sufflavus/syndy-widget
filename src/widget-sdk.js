"use strict";

(function() {
    var nutrientsClassName = "syndy-nutrients";
    var requiredAttributeName = "product-id";
    var contentUri = "/src/widget.html";
    var padding = 20;

    var nutrients = document.getElementsByClassName(nutrientsClassName);

    for(var i = 0, length = nutrients.length; i < length; i++) {
        var element = nutrients[i];
        if(!element.hasAttribute(requiredAttributeName)) {
            continue;
        }

        var widgetFrame = createIframe();

        widgetFrame.onload = function(e) {
            resizeIFrameToFitContent(e.currentTarget);
        };
        
        element.appendChild(widgetFrame);
    }

    function createIframe() {
        var widgetFrame = document.createElement("iframe");
        widgetFrame.setAttribute("src", contentUri);
        widgetFrame.style.border = 0;
        widgetFrame.style.frameborder = 0;
        widgetFrame.style.overflow = "hidden";
        return widgetFrame;
    }

    function resizeIFrameToFitContent(iFrame) {
        iFrame.width  = iFrame.contentWindow.document.body.scrollWidth + padding;
        iFrame.height = iFrame.contentWindow.document.body.scrollHeight + padding;
    }
})();