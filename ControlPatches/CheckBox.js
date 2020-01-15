jQuery.sap.declare("community.wcagHelper.ControlPatches.CheckBox");
community.wcagHelper.ControlPatches.CheckBox = {
	
	/* aria-label patches for CheckBox control */
	/* last tested on UI5 version 1.73.1 */
	onAfterRendering: function() {
		var oInput = this.$().find("input");
		var oFormLabelIdStr = this.$().attr("aria-labelledby");
		if(oFormLabelIdStr)
		{
			var oFormLabelIdList = oFormLabelIdStr.split(' ');
			if(oFormLabelIdList && oFormLabelIdList.length > 0)
			{
				var oFormLabel = $('#'+ oFormLabelIdList[0]);
				if(oFormLabel)
				{
					if(oInput.length > 0) {
						oFormLabel.attr("for", oInput[0].id);
					}
				}
			}
		}
		oInput.attr("aria-labelledby", oFormLabelIdStr); 
	}
	
}