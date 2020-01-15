jQuery.sap.declare("community.wcagHelper.ControlPatches.Panel");
community.wcagHelper.ControlPatches.Panel = {
	
	/* last tested on UI5 version 1.73.1 */
	onAfterRendering: function() {
		if(!this.getHeaderText()) {
			//if no headerText has been specified, there shouldn't be any ariaLabelledBy attributes
			this.$().removeAttr("aria-labelledby");
		}
	}
	
}