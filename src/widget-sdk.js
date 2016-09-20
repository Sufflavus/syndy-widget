"use strict";

var Syndy = {};

Syndy.widget = (function() {
    var nutrientsClassName = "syndy-nutrients";
    var requiredAttributeName = "product-id";
    var contentUri = "/src/widget.html";
    var padding = 20;
    
    var defaultOptions = {
        skin: "green"
    };

    return {
        init: init
    }

    function init(options) {
        options = options || defaultOptions;

        var nutrients = document.getElementsByClassName(nutrientsClassName);

        for(var i = 0, length = nutrients.length; i < length; i++) {
            var element = nutrients[i];
            if(!element.hasAttribute(requiredAttributeName)) {
                continue;
            }

            var productId = element.getAttribute(requiredAttributeName);
            var widgetFrame = createIframe(productId);
            element.appendChild(widgetFrame);
        }
    }

    function createIframe(productId) {
        var widgetFrame = document.createElement("iframe");
        var uri = contentUri + "#" + productId;
        widgetFrame.setAttribute("src", uri);
        widgetFrame.style.border = 0;
        widgetFrame.style.frameborder = 0;
        widgetFrame.style.overflow = "hidden";

        widgetFrame.onload = function(e) {
            resizeIFrameToFitContent(e.currentTarget);
        };

        return widgetFrame;
    }

    function resizeIFrameToFitContent(iFrame) {
        iFrame.width  = iFrame.contentWindow.document.body.scrollWidth + padding;
        iFrame.height = iFrame.contentWindow.document.body.scrollHeight + padding;
    }
})();