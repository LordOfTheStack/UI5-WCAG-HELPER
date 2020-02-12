jQuery.sap.declare("community.wcagHelper.ControlPatches.Table");
community.wcagHelper.ControlPatches.Table = {
	
    onPatched: function() {
        this.attachUpdateFinished(this.onAfterRendering);
		this.contentOnAfterRendering = function() { 
		    if(sap.m.Table.prototype.contentOnAfterRendering) { sap.m.Table.prototype.contentOnAfterRendering.apply(this,arguments); }
			this.onAfterRendering();
		}.bind(this);
    },
    
	onAfterRendering: function() {

		//role should be TABLE, not GRID
		this.$().find("table").attr("role","table"); 
		this.$().find("td span,th span").removeClass("sapMTextBreakWord"); //wrap text by word, not by letter
		
		//properly remove hidden columns for all users
		/* Requires more testing, to account for all modes and toggling
		var hiddenCols = this.$().find("th[aria-hidden=true]");
		var oldColspan = this.$().find("th").length;
		var newColspan = oldColspan - hiddenCols.length;
	    this.$().find("table").find("*[aria-hidden=true]:not(.sapUiIcon)").css("display","none");
	    this.$().find("td[colspan=" + oldColspan + "]").attr("colspan",newColspan); //re-apply any colspans to reflect the changes
	    	*/
	    
	}
	
}
