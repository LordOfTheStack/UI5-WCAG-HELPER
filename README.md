# UI5-WCAG-HELPER
a SAPUI5 library for effortlessly patching known WCAG compliance issues in standard controls

To use the library, simply call loadLibrary at the top of your component.js file
Being sure to get the path correct within your environment (second parameter)

sap.ui.getCore().loadLibrary("community.wcagHelper", "../../wcagHelper/"); 

For more information about this library, refer to the SAP Blog: 
https://blogs.sap.com/2020/01/15/wcag-compliance-patching-standard-ui5-controls-without-using-extensions/

On Jan 18th 2020, the above sap blog was censored by SAP, because it embarrassed the team responsible for Accessibility in SAPUI5. So, that's the reason for the 404 you are now getting. But you can of course continue to use this repository. ~Phill
