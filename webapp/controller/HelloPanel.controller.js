sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragement) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
        // read message from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // Show a native or vanailla JS alert
        MessageToast.show(sMsg);
      },
      onOpenDialog: function ()     {
        this.getOwnerComponent().openHelloDialog();
    }
    })
});
