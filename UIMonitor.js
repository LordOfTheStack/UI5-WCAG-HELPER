/*
	This library has been originally developed by Phillip & Bradley Smith, Smith Brothers Consulting Pty Ltd AUSTRALIA
	It is provided to the wider community as open-source software, community contribution is welcome and appreciated.
	Hopefully someday WCAG compliance will come built-in to SAPUI5, but until then, please feel welcome to use this patch library
	14/01/2020 Phillip Smith
*/
jQuery.sap.declare("community.wcagHelper.UIMonitor");
community.wcagHelper.UIMonitor = {
	
	Patchers: {},
	
	init: function() {
		jQuery.sap.require("community.wcagHelper.UICatalog");
		
		if(!document._UIMonitor) {
			$(document).bind('DOMNodeInserted', function(event) {
				var sId = event.target.getAttribute("data-sap-ui");
				var children = $(event.target).find("*[data-sap-ui]");
				var control = sap.ui.getCore().byId(sId);
				if(control) {
					community.wcagHelper.UIMonitor.patchControl(control);
				}
				$(children).each(function(){
					sId = this.getAttribute("data-sap-ui");
					var control = sap.ui.getCore().byId(sId);
					if(control) {
						community.wcagHelper.UIMonitor.patchControl(control);
					}
				});
			});
			document._UIMonitor = true;
		}
		
	},
	
	patchControl: function(oControl) {
		if(oControl && oControl.getMetadata && !oControl._wcagPatched) {
			var sClass = oControl.getMetadata()._sClassName;
			var template = community.wcagHelper.UICatalog[sClass];
			if(template) { //a patch exists for this control type, apply it
				
				//instantiate the patcher class (if not already)
				if(!community.wcagHelper.UIMonitor.Patchers[template]) {
					//we have not imported this patcher class yet, do it now
					var sPatchClass = "community.wcagHelper." + template;
					jQuery.sap.require(sPatchClass);
					community.wcagHelper.UIMonitor.Patchers[template] = community.wcagHelper.UIMonitor.stringToObject(sPatchClass);
					console.log("WCAG Patcher class [" + sPatchClass + "] loaded. Patch will be applied to controls of type [" + sClass + "]");
				}
				
				//apply the patch 
				var patcher = community.wcagHelper.UIMonitor.Patchers[template];
				if(patcher && patcher.onAfterRendering) {
					//chain the patchers onAfterRendering function to the control
					if(oControl.onAfterRendering) {
						//this control already has onAfterRendering code, so we need to preserve that and chain ours to the end of it.
						oControl.onAfterRenderingPart1 = oControl.onAfterRendering.bind(oControl);
						oControl.onAfterRenderingPart2 = patcher.onAfterRendering.bind(oControl);
						oControl.onAfterRendering = function() {
							this.onAfterRenderingPart1();
							this.onAfterRenderingPart2();
						};
					} else {
						//no need to chain, this control has no onAfterRendering function (most don't)
						oControl.onAfterRendering = patcher.onAfterRendering.bind(oControl);
					}
					if(patcher.onPatched) {
						patcher.onPatched.bind(oControl).call();
					}
					oControl._wcagPatched = true;
				} else {
					console.error("WCAG Patcher class " + template + " Not Found or missing onAfterRendering function. patching of control type " + sClass + " has failed. (community.wcagHelper.UIMonitor)");
				}
			}
		}
	},
	
	stringToObject: function(str) {
		var path = str.split(".");
		var fn = window;
		for(var i = 0; i < path.length; i++) {
			fn = fn[path[i]];
		}
		return fn;
	}
	
}