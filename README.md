# UI5-WCAG-HELPER
a SAPUI5 library for effortlessly patching known WCAG compliance issues in standard controls

To use the library, simply call loadLibrary at the top of your component.js file
Being sure to get the path correct within your environment (second parameter)

sap.ui.getCore().loadLibrary("community.wcagHelper", "../../wcagHelper/"); 

For more information about this library, refer to the SAP Blog:
https://blogs.sap.com/2020/01/15/wcag-compliance-patching-standard-ui5-controls-without-using-extensions/
