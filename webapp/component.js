sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component",{
        metadata:{
            rootView:{
                "viewName":"sap.ui.demo.walkthrough.view.App",
                "type":"XML",
                "async": true,
                "id": "app"
            }
        }
    })
})