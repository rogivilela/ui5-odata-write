sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("ovly.odatawrite.controller.Main", {

            oList: null,

			onInit: function () {
                this.oList = this.byId("list");
            },


            onItemPress: function(oEvent){
                var oSource = oEvent.getSource();
                var oParameters = oEvent.getParameters();
                var oListItem = oParameters.listItem;
            },

            onLiveChange: function(oEvent){
                
                var aFilter = [];
                var sNewValue = oEvent.getParameters().newValue;
                if(sNewValue){
                    aFilter.push(
                        new sap.ui.model.Filter({
                            path: "Name",
                            operator: sap.ui.model.FilterOperator.Contains,
                            value1: sNewValue
                        })
                    );
                }

                var oBinding = this.oList.getBinding("items"); // sap.ui.model.odata.v2.ODataListBinding

                oBinding.filter(aFilter);
            }

		});
	});
