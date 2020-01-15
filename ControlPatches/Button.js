jQuery.sap.declare("community.wcagHelper.ControlPatches.Button");
community.wcagHelper.ControlPatches.Button = {
	
	/* last tested on UI5 version 1.73.1 */
	onAfterRendering: function() {
		//tooltips of buttons also need an aria-label (only when there is no Text)
		if(!this.getText()) {
			var strTooltip = this.$().attr("title");
			if(strTooltip) {
				this.$().attr("aria-label",strTooltip);
			}
		}
	}
	
}