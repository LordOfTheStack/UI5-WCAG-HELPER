/*
	This library has been originally developed by Phillip & Bradley Smith, Smith Brothers Consulting Pty Ltd AUSTRALIA
	It is provided to the wider community as open-source software, community contribution is welcome and appreciated.
	Hopefully someday WCAG compliance will come built-in to SAPUI5, but until then, please feel welcome to use this patch library
	14/01/2020 Phillip Smith
*/
sap.ui.define([], function() {
    "use strict";

    jQuery.sap.declare("community.wcagHelper.wcagHelper");
    
    /**
     * @alias community.wcagHelper
     */
    sap.ui.getCore().initLibrary({

        name: "community.wcagHelper",
        version: "1.0.0",
        dependencies: ["sap.ui.core"],
        types: [],
        interfaces: [],
        controls: [],
        elements: [],
        noLibraryCSS: true
    });
    
    jQuery.sap.require("community.wcagHelper.UIMonitor");
    community.wcagHelper.UIMonitor.init();

    return community.wcagHelper;

}, false);  