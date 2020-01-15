jQuery.sap.declare("community.wcagHelper.ControlPatches.Select");
community.wcagHelper.ControlPatches.Select = {
	
	/* 
		successfully tested on UI5 version 1.60.18
		successfully tested on UI5 version 1.73.1   */
	onAfterRendering: function() {
			
		//label element should actually be a span
		var oLabel = this.$().find("label");
		if(oLabel){
			$.each(oLabel, function() {
				var html = $(this).wrap("<p/>").parent().html();
				$(this).unwrap();
				$(this).replaceWith( html.replace("<label ","<span ").replace("/label>","/span>") );
			}); 
		}
		
					
	}
	
}