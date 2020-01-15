/*
	This file maintains a list of control types and corresponding patch classes to be applied to them.
	whenever you create a new patcher class, add an entry here @Phillip Smith
	
	When upgrading UI5 to the latest version, you can easily retest a controls compliance by commenting out its reference here
	to see what the vanilla version of the control looks like, in order to see if the patches are still required or not.
*/
jQuery.sap.declare("community.wcagHelper.UICatalog");
community.wcagHelper.UICatalog = {
	
	"sap.m.CheckBox": "ControlPatches.CheckBox",
	"sap.m.Panel": "ControlPatches.Panel",
	"sap.m.Select": "ControlPatches.Select",
	"sap.m.Button": "ControlPatches.Button"
	
}